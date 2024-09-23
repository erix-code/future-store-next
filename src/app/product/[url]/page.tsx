import {getProductById} from "@/app/services/shopify";

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
        <div>
            <h3>{product.title}</h3>
        </div>
    )
}