"use client"
import Link from "next/link";
export default function Header () {
    console.log("Header");
    return (
        <header className={"my-20"}>
            <nav className={"pt-5 w-full text-lg md:text-2xl font-semibold flex justify-between fixed top-0 bg-primary z-20"}>
                <ul className={"flex flex-row justify-center  h-10 space-x-10 md:w-1/3 w-1/2 "}>
                    <li>
                        <Link href="/" className={"hover:text-pink-500"}>Home</Link>
                    </li>
                    <li>
                        <Link href="/store" className={"hover:text-pink-500"}>Tienda</Link>
                    </li>
                </ul>
                <ul className={"flex flex-row justify-center space-x-10 md:w-1/3 w-1/2"}>
                    <li>
                        <Link href="/" className={"hover:text-pink-500"}>Login</Link>
                    </li>
                    <li>
                        <Link href="/store" className={"hover:text-pink-500"}>Tienda</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}