"use client"
import Link from "next/link";
import {FaShoppingCart} from "react-icons/fa";
import {useState} from "react";
import {useShoppingCart} from "@/hooks/useShoppingCart";
import Image from "next/image";
import {log} from "node:util";
import {FcEmptyTrash} from "react-icons/fc";
import {BsTrash} from "react-icons/bs";

export const ShoppingCart = () => {
    const {cart} = useShoppingCart();
    const [isOpen, setIsOpen] = useState(false);
    const [counter, setCounter] = useState(0);
    const handleModal = () => {
        setIsOpen(!isOpen);
        setIsOpen(!isOpen);
    }
    console.log(cart);
    return (
        <div>
            <li onClick={handleModal}>
                <div className={"relative "}>
                    <FaShoppingCart></FaShoppingCart>
                    <span
                        className={"absolute -top-3 -right-4 bg-red-500 text-base rounded-full w-5 h-5 text-center"}>{cart.length}</span>
                </div>
            </li>
            <div className={`w-full h-screen  md:w-80 md:h-auto  md:min-h-80 border-gray-600 border rounded-xl absolute left-0 md:left-auto top-14 md:right-1 z-40 bg-primary
                ${isOpen ? "block" : "hidden"}`}>
                {
                    cart.map((product) => (
                        <div className={"grid grid-cols-6 gap-x-1 h-20 p-2 place-items-center"}>
                            <div className={"col-span-1"}>
                                <Image src={product.image.src} alt={product.image.alt} width={500} height={500}></Image>
                            </div>
                            <div className={"col-span-3 text-sm font-semibold"}>
                                {product.title}
                            </div>
                            <div className={"col-span-1"}>
                                {product.quantity}
                            </div>
                            <div className={"col-span-1 text-red-500"}>
                                <BsTrash></BsTrash>
                            </div>
                        </div>
                    ))
                }
                <div className={"flex justify-center mt-5"}>
                    <button className={"m-4 bg-pink-600 w-full h-10 rounded-lg shadow-xl"}>Checkout</button>
                </div>
            </div>
        </div>
    )
}