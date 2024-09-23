import {ProductCard} from "../ProductCard/ProductCard"

interface ProductsWrapperProps {
    products: ProductType[]
}

export const ProductsWrapper = ({products}: ProductsWrapperProps) => {
    return (
        <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full place-items-center gap-x-10 px-10 xl:px-52"}>
            {products?.map((product) => (
                <ProductCard key={product.id} product={product}/>
            ))}
        </div>
    )
}