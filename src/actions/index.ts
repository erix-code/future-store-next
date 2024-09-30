"use server"
import {GraphQLClientSingleton} from "@/graphql";
import {createUserMutation} from "@/graphql/mutations/createUserMutation";
import {GraphQLClient} from "graphql-request";
import {createAccessToken} from "@/utils/auth/createAcessToken";
import {redirect} from "next/navigation";
import {cookies} from "next/headers";
import {validateAccessToken} from "@/utils/auth/validateAccessToken";
import {createCartMutation} from "@/graphql/mutations/createCartMutation";

export const handleRegister = async (formData) => {
    const formDataObject = Object.fromEntries(formData);
    /** @var const graphClient: GraphQLClient **/
    const graphClient: GraphQLClient = GraphQLClientSingleton.getInstance().getClient();
    console.log(formDataObject);
    delete formDataObject["repeatPassword"];
    const variables = {
        input: {
            ...formDataObject,
            phone: '+591' + formDataObject.phone
        }
    }
    const { customerCreate } = await graphClient.request(createUserMutation, variables)
    const { customerUserErrors, customer } = customerCreate

    if(customer?.firstName){
        await createAccessToken(formDataObject.email as string, formDataObject.password as string)
        redirect('/store')
    }
}

export const handleLogin = async (formData)=> {
    const formDataObject = Object.fromEntries(formData);
    console.log(formDataObject);
   const accessToken = await createAccessToken(formDataObject.email as string, formDataObject.password as string);
    console.log(accessToken);
    if (accessToken) {
        redirect("/store")
    }
}


export const handleCreateCart = async (items: CartItem[]) => {
    const cookiesStore = cookies();
    const accessToken: string = cookiesStore.get('accessToken')?.value as string;
    if (!accessToken) redirect('/login');

    const graphClient: GraphQLClient = GraphQLClientSingleton.getInstance().getClient();
    const customer = await validateAccessToken();

    // Validate and log items
    items.forEach(item => {
        console.log(item.merchandiseId);
        if (!item.merchandiseId) {
            throw new Error(`Invalid merchandiseId for item: ${JSON.stringify(item)}`);
        }
    });

    const variables = {
        input: {
            buyerIdentity: {
                customerAccessToken: accessToken,
                email: customer?.email
            },
            lines: items.map((item) => {
                return {
                    merchandiseId: item.merchandiseId,
                    quantity: item.quantity
                }
            })
        }
    }

    console.log('GraphQL Variables:', variables);

    const { cartCreate } = await graphClient.request(createCartMutation, variables);
    console.log(cartCreate);
    return cartCreate?.cart?.checkoutUrl;
}