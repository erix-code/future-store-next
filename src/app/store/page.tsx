import { getProducts } from "@/app/services/shopify";
import { ProductsWrapper } from "@/app/components/store/ProductsWrapper/ProductsWrapper";
import {Suspense} from "react";
import Loader from "@/app/components/Loader/Loader";
export default async function Store(){
    const products = await getProducts();
    return (
        <Suspense fallback={<Loader />}>
            <ProductsWrapper products={products}>

            </ProductsWrapper>
        </Suspense>

    )
}