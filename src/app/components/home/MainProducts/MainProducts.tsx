import Image from "next/image";
const getProducts = async () => {
    try {
        const response = await fetch(`${process.env.SHOPIFY_HOSTNAME}/admin/api/2024-07/products.json?limit=8`, {
            headers: {
                "X-Shopify-Access-Token": process.env.SHOPIFY_ACCESS_TOKEN || ""
            }
        });
        const { products } = await response.json();
        return products;
    } catch (error) {
        console.log(error);
    }
}
export default async function MainProducts() {

    const products : [] = await getProducts();

    return (
        <section>
            <h3 className={"text-7xl text-center mb-20 mt-5"}>✨ New products released!</h3>
            <div className={"grid grid-cols-2 space-y-0 "}>
                {products?.map((product:any, index:number) => (
                    <div key={index} className={"col-span-1 w-full h-[420px] relative "}>
                        <h3 className={"text-2xl font-semibold absolute top-5 right-10 z-10"}>{product.title}</h3>
                        <Image className={"opacity-50 object-cover w-full h-[420px]"} src={product.image.src} height={product.image.height} width={product.image.width} alt={product.image.alt}></Image>
                    </div>
                ))}
            </div>

        </section>

    )
}