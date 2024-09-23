import { env } from "@/app/config/env"

export const shopifyUrls = {
    products: {
        'all': `${env.SHOPIFY_HOSTNAME}/admin/api/2024-07/products.json`,
        'find': function(id: string) {
            return `${env.SHOPIFY_HOSTNAME}admin/api/2024-07/products/${id}.json`
        }
    },
    collections: {
        "all": `${env.SHOPIFY_HOSTNAME}/admin/api/2024-07/smart_collections.json`,
        "findProducts": function (id: string) {
            return `${env.SHOPIFY_HOSTNAME}/admin/api/2024-07/collections/${id}/products.json`
        }
    }
}