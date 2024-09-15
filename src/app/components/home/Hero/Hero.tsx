"use client"
import "./Hero.css";
export default function Hero() {
    return (
        <div className={"w-full h-40 flex flex-col items-center justify-center font-bold space-y-10"}>
            <h1 className="bg-gradient-to-r from-pink-600 to-indigo-600 text-8xl text-transparent bg-clip-text">
                FUTURE WORLD
            </h1>
            <p className={"text-3xl"}>Empowering Your Tomorrow, Today!</p>
        </div>
    )
}