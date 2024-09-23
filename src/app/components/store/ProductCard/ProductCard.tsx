import Image from "next/image";
import Link from "next/link";

interface ProductCardInterface {
    product: ProductType
}

export const ProductCard = ({product}: ProductCardInterface) => {
    console.log();
    return (
        <Link href={`/articulo/${product.handle}?id=${product.id}`} className={"relative col-span-1 max-w-96"}>
            <article>
                <Image
                    src={product.image} alt={product.title} quality={80} height={360} width={360}
                    loading="eager"
                />
                <div className={"text-xl max-w-80 font-semibold"}>
                    <h3>{product.title}</h3>
                </div>
                <span className={"absolute top-0 right-0 bg-red-500 rounded text-lg px-2 rotate-6"}>${product.variants[0].price} USD</span>
            </article>
        </Link>
    );
};