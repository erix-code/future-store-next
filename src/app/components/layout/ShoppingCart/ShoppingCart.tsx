"use client"
import Link from "next/link";
import {FaShoppingCart} from "react-icons/fa";
import {useState} from "react";
import {useShoppingCart} from "@/hooks/useShoppingCart";

export const ShoppingCart = () => {
    const {cart} = useShoppingCart();
    const [counter, setCounter] = useState(0);
    return (
        <li>

            <Link href="/store" className={"relative "}>
                <FaShoppingCart></FaShoppingCart>
                <span className={"absolute -top-3 -right-4 bg-red-500 text-base rounded-full w-5 h-5 text-center"}>{cart.length}</span>
            </Link>

        </li>
    )
}