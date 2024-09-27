import {GraphQLClientSingleton} from "@/graphql";
import { customerAccessTokenCreateMutation } from "@/graphql/mutations/customerAccessTokenCreate";
import {cookies} from "next/headers";

export const createAccessToken = async (email: string, password: string) => {
    try {
        const cookiesStore = cookies();
        const graphqlClient = GraphQLClientSingleton.getInstance().getClient();

        const {customerAccessTokenCreate} = await graphqlClient.request( customerAccessTokenCreateMutation, {
            "email": email,
            "password": password
        });
        console.log(customerAccessTokenCreate);
        const { accessToken, expiresAt } = customerAccessTokenCreate?.customerAccessToken;
        if(accessToken){
            cookiesStore.set("accessToken", accessToken, {
                path: "/",
                expires: new Date(expiresAt),
                httpOnly: true,
                sameSite: "strict"
            });
            return accessToken;
        }
    } catch (error) {
        console.log(typeof error);
    }

}