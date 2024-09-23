import { shopifyUrls } from "./urls";
import { env } from "@/app/config/env";
export const getProducts = async () => {
    try {
        const response = await fetch(shopifyUrls.products.all, {
            headers: {
                "X-Shopify-Access-Token": env.SHOPIFY_ACCESS_TOKEN || ""
            }
        });
        const { products } = await response.json();
        return products;
    } catch (error) {
        console.log(error);
    }
}
export const getCollections = async () => {
    try {
        const response = await fetch(shopifyUrls.collections.all, {
            headers: {
                "X-Shopify-Access-Token": env.SHOPIFY_ACCESS_TOKEN || ""
            }
        });
        const { smart_collections }  = await response.json();
        return smart_collections;
    } catch (error){
        console.log(error);
    }
}
export const getProductsByCollectionId = async (collectionId: string) => {
    try {
        const response = await fetch(shopifyUrls.collections.findProducts(collectionId), {
            headers: {
                "X-Shopify-Access-Token": env.SHOPIFY_ACCESS_TOKEN || ""
            }
        });
        const { products } = await response.json();
        return products;
    } catch (error) {
        console.log(error);
    }
}