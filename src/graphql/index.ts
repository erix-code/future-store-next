import { GraphQLClient } from "graphql-request/src/legacy/classes/GraphQLClient";
import { env } from "@/app/config/env";

export class GraphqlClientSingleton {
    private readonly endpoint: string = env.SHOPIFY_GRAPHQL_ENDPOINT;
    private static instance: GraphqlClientSingleton;

    static getInstance(): GraphqlClientSingleton{
        if(!this.instance) {
            this.instance =  new GraphqlClientSingleton();
        }
        return this.instance;
    }
    getClient(): GraphQLClient{
        return new GraphQLClient(this.endpoint, {
            headers: {
                "Shopify-Storefront-Private-Token": env.HEADLESS_PRIVATE_ACCESS_TOKEN
            }
        });
    }

}