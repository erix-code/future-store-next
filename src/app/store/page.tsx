import { getProducts } from "@/app/services/shopify";
import { ProductsWrapper } from "@/app/components/store/ProductsWrapper/ProductsWrapper";

export default async function Store(){
    const products = await getProducts();
    return (
        <ProductsWrapper products={products}>

        </ProductsWrapper>
    )
}