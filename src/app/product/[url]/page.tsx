"use client"
import {getProductById} from "@/app/services/shopify";
import {useSearchParams} from "next/navigation";

export default async function ProductPage() {
    const params = useSearchParams();
    const id = params.get("id");
    const product = await getProductById(id);
    console.log(id);
    // const product = await getProductById();
    return (
        <div>
            <h3>{product.title}</h3>
        </div>
    )
}