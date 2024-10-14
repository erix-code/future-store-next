import { getProducts } from "@/app/services/shopify";
import { env } from "@/app/config/env";
interface json {
    products: []
}
export async function GET(): Promise<Response> {

    const response: Response = await fetch(`${env.NEXT_PUBLIC_BASE_PATH}/api`);
    const { products }:json = await response.json();
    return Response.json(products);
}