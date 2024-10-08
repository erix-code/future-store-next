"use client"
import { FaRocketchat } from "react-icons/fa6";
import  Link  from "next/link";
export default function Footer() {
    console.log("Footer");
    return (
        <footer className={"flex flex-col w-full h-24 justify-center items-center"}>
            <Link className={"flex items-center justify-center fixed rounded-full right-10 bottom-12 bg-pink-600 w-16 h-16"} href={"/chat"}>
                <FaRocketchat className={"text-4xl font-extrabold"} />
            </Link>
            <div className={"border-black border w-full mb-5 h-2 bg-gradient-to-r from from-indigo-600 to-pink-600"}>
            </div>
            <h3 className="text-xl bg-gradient-to-r from-pink-600 to-indigo-600 md:text-3xl  text-transparent bg-clip-text">
                Future Store
            </h3>
        </footer>
    )
}