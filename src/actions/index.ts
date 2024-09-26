"use server"
import {GraphQLClientSingleton} from "@/graphql";
import {createUserMutation} from "@/graphql/mutations/createUserMutation";
import {GraphQLClient} from "graphql-request";

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
    const data = await graphClient.request(createUserMutation, variables);
    return data;
}