import {getProductsByCollectionId} from "@/app/services/shopify";
import {ProductsWrapper} from "@/app/components/store/ProductsWrapper/ProductsWrapper";

interface CategoryProps {
    params: {
        category: string
    }
    searchParams: {
        id: string
    }
}

export default async function Category(props: CategoryProps) {
    const {category} = props.params;
    console.log(props)
    const products = await getProductsByCollectionId(props.searchParams.id);
    console.log(products);

    return (
        <>
            <ProductsWrapper products={products}></ProductsWrapper>
        </>
    )
}