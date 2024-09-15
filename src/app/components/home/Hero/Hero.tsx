"use client"
import "./Hero.css";
export default function Hero() {
    return (
        <div className={"w-full h-40 flex flex-col items-center justify-center font-bold space-y-5 md:space-y-10 text-center"}>
            <h1 className="text-6xl bg-gradient-to-r from-pink-600 to-indigo-600 md:text-8xl  text-transparent bg-clip-text">
                FUTURE WORLD
            </h1>
            <h4 className={"text-4xl md:text-4xl font-semibold md:font-bold"}>Empowering Your Tomorrow, Today!</h4>
        </div>
    )
}