import Image from "next/image";
import { getMainProducts } from "@/app/services/shopify";
export default async function MainProducts() {
    const products : [] = await getMainProducts();

    return (
        <section>
            <h3 className={"text-7xl text-center mb-20 mt-5"}>✨ New products released!</h3>
            <div className={"grid grid-cols-2 space-y-0 "}>
                {products?.map((product:any, index:number) => (
                    <div key={index} className={"col-span-1 w-full h-[420px] relative "}>
                        <h3 className={"text-2xl font-semibold absolute top-5 right-10 z-10"}>{product.title}</h3>
                        <Image className={"opacity-50 object-cover w-full h-[420px]"}
                               src={product.image.src} height={product.image.height} width={product.image.width} alt={product.image.alt}></Image>
                    </div>
                ))}
            </div>

        </section>

    )
}