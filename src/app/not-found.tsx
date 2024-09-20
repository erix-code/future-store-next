"use client"
import Image from "next/image";
import Link from "next/link";
export default function NotFound(){
    return (
        <div className={"w-full h-[80vh] flex flex-col justify-center items-center text-4xl "}>
            <div className={"pb-5 bg-gradient-to-r from-pink-600 to-indigo-600  text-transparent bg-clip-text uppercase font-bold"}>
                <p>Pagina no Encontrada</p>
            </div>
            <div className={"py-2"}>
                <Image src={"/images/404.png"} height={450} width={450} alt={"Not Found"}></Image>
            </div>
            <p className={"text-white text-center w-1/2 text-2xl pb-5"}>Porfavor vuelve a la pagina principal</p>
            <Link className={"bg-gradient-to-r from-pink-600 to-indigo-600 rounded shadow-md shadow  px-6 py-2 text-2xl text-white"}
               href={"/"}
            >Volver atras</Link>
        </div>
    )
}