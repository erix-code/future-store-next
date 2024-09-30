"use client"
import {FaShoppingCart} from "react-icons/fa";
import {useState} from "react";
import {useShoppingCart} from "@/hooks/useShoppingCart";
import Image from "next/image";
import {BsTrash} from "react-icons/bs";
import {handleCreateCart} from "@/actions";

export default function ShoppingCart() {
    const {cart, removeCartItem} = useShoppingCart();
    const [isOpen, setIsOpen] = useState(false);
    const [counter, setCounter] = useState(0);
    const handleModal = () => {
        setIsOpen(!isOpen);
        setIsOpen(!isOpen);
    }
    const removeItem = (product) => {
        removeCartItem(product);
    }
    console.log(cart);

    async function handleSubmit() {
        try {
            const url = await handleCreateCart(cart);
            if (!url) throw new Error("Error creating cart");
            window.localStorage.removeItem("cart");
            window.location.href = url;

        } catch (error) {
            console.error(error)
        }

    }

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
                    cart.map((product, index) => (
                        <div className={"grid grid-cols-6 gap-x-1 h-20 p-2 place-items-center"} key={index}>
                            <div className={"col-span-1"}>
                                <Image src={product.image.src} alt={product.title} width={500} height={500}></Image>
                            </div>
                            <div className={"col-span-3 text-sm font-semibold"}>
                                {product.title}
                            </div>
                            <div className={"col-span-1"}>
                                {product.quantity}
                            </div>
                            <div className={"col-span-1 text-red-500"} onClick={(event) => removeItem(product)}>
                                <BsTrash></BsTrash>
                            </div>
                        </div>
                    ))
                }
                <div className={"flex justify-center mt-5"} >
                    <button className={"m-4 bg-pink-600 w-full h-10 rounded-lg shadow-xl"} onClick={handleSubmit}>Checkout</button>
                </div>
            </div>
        </div>
    )
}