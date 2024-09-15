import Image from "next/image";
import Description from "@/app/components/home/Description/Description";
import Hero from "@/app/components/home/Hero/Hero";
import MainProducts from "@/app/components/home/MainProducts/MainProducts";

export default function Home() {
  return (
    <div className="">
      <h1>HOla mundo</h1>
        <Hero></Hero>
        <Description></Description>
      <MainProducts></MainProducts>
    </div>
  );
}
