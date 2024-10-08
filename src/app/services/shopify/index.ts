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

export const getProductById = async (id) => {
    try {
        console.log(shopifyUrls.products.find(id));
        const response = await fetch(shopifyUrls.products.find(id), {
            headers: {
                "X-Shopify-Access-Token": env.SHOPIFY_ACCESS_TOKEN || ""
            }
        });
        const {product} = await response.json();
        return product;
    } catch (error) {
        console.log(error);
    }
}

export const getMainProducts = async () => {
    const mainProductId: string = "626094440632";
    try {
        const response = await fetch(shopifyUrls.collections.findProducts(mainProductId), {
            headers: {
                "X-Shopify-Access-Token": env.SHOPIFY_ACCESS_TOKEN || ""
            },
            cache: "force-cache",
            next: {
                tags: ["main-products"]
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