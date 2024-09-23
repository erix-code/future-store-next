import { env } from "@/app/config/env"

export const shopifyUrls = {
    products: {
        'all': `${env.SHOPIFY_HOSTNAME}/admin/api/2024-07/products.json`,
        'find': function(id: string) {
            return `${env.NEXT_PUBLIC_SHOPIFY_HOSTNAME}admin/api/2024-07/smart_collections.json`
        }
    },
    collections: {
        "all": `${env.SHOPIFY_HOSTNAME}/admin/api/2024-07/smart_collections.json`,
        "findProducts": function (id: string) {
            return `${env.SHOPIFY_HOSTNAME}/admin/api/2024-07/collections/${id}/products.json`
        }
    }
}