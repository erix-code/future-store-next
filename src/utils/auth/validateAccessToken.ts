import {cookies} from "next/headers";
import {GraphQLClientSingleton} from "@/graphql";
import {customerName} from "@/graphql/queries/customerName";
export const validateAccessToken = async () => {
    const cookieStore = cookies();
    const accessToken = cookieStore.get("accessToken")?.value;
    const graphqlClient = GraphQLClientSingleton.getInstance().getClient();
    if (accessToken) {
        const { customer } = await graphqlClient.request(customerName, {
            customerAccessToken: accessToken
        });
        return customer;
    }


}