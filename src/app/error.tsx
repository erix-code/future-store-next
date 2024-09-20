"use client"
import {ErrorProps} from "@/app/models/ErrorProps";
import Image from "next/image";

export default function GlobalError({error, reset}:ErrorProps){
    return (
        <div className={"w-full h-[80vh] flex flex-col justify-center items-center text-4xl "}>
            <div className={"pb-5 bg-gradient-to-r from-pink-600 to-indigo-600  text-transparent bg-clip-text uppercase font-bold"}>
                <p>Ha ocurrido un error</p>
            </div>
            <div className={"py-2"}>
                <Image src={"/images/error.png"} height={450} width={450} alt={"Error"}></Image>
            </div>
            <p className={"text-white text-center w-1/2 text-2xl pb-5"}>Hubo un problema mientras utilizabas la pagian por favor vuelve a intentarlo mas tarde.</p>
            <button className={"bg-gradient-to-r from-pink-600 to-indigo-600 rounded shadow-md shadow  px-6 py-2 text-2xl text-white"} onClick={reset}>Reintentar</button>
        </div>
    )
}