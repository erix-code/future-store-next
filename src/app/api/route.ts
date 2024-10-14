import {getProducts} from "@/app/services/shopify";
import {env} from "@/app/config/env";

export async function GET(): Promise<Response> {
    try {
        const data = await getProducts();
        const products = await data;
        return Response.json(products);
    } catch (error) {
        console.log(error);
    }
}