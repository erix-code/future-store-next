import Image from "next/image";
import Description from "@/app/components/home/description/Description";
import Hero from "@/app/components/home/hero/Hero";
import MainProducts from "@/app/components/home/mainProducts/MainProducts";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>HOla mundo</h1>
        <Hero></Hero>
        <MainProducts></MainProducts>
        <Description></Description>
    </div>
  );
}
