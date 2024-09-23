import Link from "next/link";
import {getCollections} from "@/app/services/shopify";

export default async function Layout({children} : {children: React.ReactNode}){
    const smartCollections = await getCollections();
    return (
        <main>
            <nav className={"flex flex-row space-x-2 px-10 xl:px-10 pb-10 overflow-x-auto"}>
                {smartCollections.map((collection, index) => (
                    <Link key={index} className={"flex bg-gradient-to-r from-pink-500 to-blue-600 shadow-md rounded-3xl min-h-10 justify-center items-center px-4"}
                          href={`/store/`+collection.handle}>
                        <span className={"text-sm md:text-md md:font-semibold "}>{collection.title}</span>
                    </Link>
                ))}
            </nav>
            {children}
        </main>
    )
}