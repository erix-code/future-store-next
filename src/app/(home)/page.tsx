import Image from "next/image";
import Description from "@/app/components/home/Description/Description";
import Hero from "@/app/components/home/Hero/Hero";
import MainProducts from "@/app/components/home/MainProducts/MainProducts";
import {Suspense} from "react";
import Loader from "@/app/components/Loader/Loader";

export default function Home() {
    return (
        <div className="">
            <Hero></Hero>
            <Description></Description>
            <Suspense fallback={<Loader/>}>
                <MainProducts></MainProducts>
            </Suspense>
        </div>
    );
}
