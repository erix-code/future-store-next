import Image from "next/image";
import {useState} from "react";

export default function ProductView({product}) {
    let counter = 0;
    const getProductPrice = () => {
        if (product.variants) {
            return product.variants[0].price;
        } else {
            return product.price;
        }
    }
    return (
        <div className={"flex w-full mt-40 px-5 md:px-28 mb-40"}>
            <div className={"grid grid-cols-1 md:grid-cols-2 w-full gap-x-10"}>
                <div className={"col-span-1"}>
                    <Image
                        className={"rounded shadow-md"}
                        src={product.image.src}
                        alt={product.image.alt}
                        width={500} height={500}></Image>
                </div>
                <div className={"col-span-1 mt-5"}>
                    <h2 className={"text-4xl font-bold "}>{product.title}</h2>
                    <h3 className={"border-2 border-violet-600 w-fit p-2 rounded-xl text-shadow-xl shadow-violet-600 my-5"}>{product.tags}</h3>

                    <div className={"text-xl font-light"}  dangerouslySetInnerHTML={{__html: product.body_html}}
                    />
                    <div className={"py-5 text-3xl font-semibold"}>
                        $ {getProductPrice()}
                    </div>
                    <div className={"flex py-5 w-full"}>
                        <div className={"grid grid-cols-3 w-1/3 bg-gray-500 rounded mr-5 text-indigo-900 text-4xl"}>
                            <button>-</button>
                            <input type="number" className={"bg-gray-500 text-center"} value={counter}/>
                            <button>+</button>
                        </div>
                        <button className={"w-2/3 bg-gradient-to-r from-indigo-700 to-indigo-900 p-3 rounded-xl text-xl font-bold"}>
                            Add to Cart
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}