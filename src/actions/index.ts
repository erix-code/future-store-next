"use server"
import {GraphQLClientSingleton} from "@/graphql";
import {createUserMutation} from "@/graphql/mutations/createUserMutation";
import {GraphQLClient} from "graphql-request";
import {createAccessToken} from "@/utils/auth/createAcessToken";
import {redirect} from "next/navigation";

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