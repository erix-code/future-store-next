import {getProducts} from "@/app/services/shopify";
import {ProductsWrapper} from "@/app/components/store/ProductsWrapper/ProductsWrapper";

interface CategoryProps {
    params: {
    category: string
    }
}
export default async function Category(props: CategoryProps) {
    const { category} = props.params;
    const products = await getProducts();

    return(
        <>
            <ProductsWrapper products={products}></ProductsWrapper>
        </>
    )
}