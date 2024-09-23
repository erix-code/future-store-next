import {getProductById} from "@/app/services/shopify";
import ProductView from "@/app/components/product/ProductView/ProductView";

interface ProductPageParams {
    params: {
        url: string
    },
    searchParams: {
        id: string
    }
}
export default async function ProductPage(params: ProductPageParams) {
    const id = params.searchParams.id;
    const product = await getProductById(id);
    console.log(product);
    return (
        <ProductView product={product}></ProductView>
    )
}