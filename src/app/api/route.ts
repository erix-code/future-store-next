import { getProducts } from "@/app/services/shopify";

export async function GET() {
    const response = await fetch(`${window.location.origin}/api`);
    const { products } = response.json();

    return Response.json(products);
}