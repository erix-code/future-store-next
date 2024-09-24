import {getProductById} from "@/app/services/shopify";
import ProductView from "@/app/components/product/ProductView/ProductView";
import {redirect} from "next/navigation";

interface ProductPageParams {
    params: {
        url: string
    },
    searchParams: {
        id: string
    }
}

export async function generateMetadata(params: ProductPageParams){
    const id = params.searchParams.id;
    const product = await getProductById(id);


    return {
        title: product.title,
        description: product.body_html,
        keywords: product.tags,
        openGraph: {
            images: [product.image.src]
        }
    }
}
export default async function ProductPage(params: ProductPageParams) {
    const id = params.searchParams.id;
    const product = await getProductById(id);


    if (!id) {
        redirect("/store");
    }
    return (
        <ProductView product={product}></ProductView>
    )
}