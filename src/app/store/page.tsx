import {ProductsWrapper} from "@/app/components/store/ProductsWrapper/ProductsWrapper";
import {getProducts} from "@/app/services/shopify";
export default async function Store() {
    const products = await getProducts();
    return(
        <>
            <ProductsWrapper products={products}></ProductsWrapper>
        </>


    )
}