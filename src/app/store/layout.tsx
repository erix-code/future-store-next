import Link from "next/link";
export default function Layout({children} : {children: React.ReactNode}){
    return (
        <main>
            <nav>Navegacion de categorias</nav>
            <ul className={"flex flex-row space-x-10 px-10 xl:px-60"}>
                <Link className={"flex bg-gradient-to-r from-pink-500 to-blue-600 w-40 shadow-md rounded-3xl h-10 justify-center items-center"} href={"/"}>
                    <span className={"text-lg font-bold"}>Dark</span>
                </Link>

                <Link className={"flex bg-gradient-to-r from-pink-500 to-blue-600 w-40 shadow-md rounded-3xl h-10 justify-center items-center"} href={"/"}>
                    <span className={"text-lg font-bold"}>Dark</span>
                </Link>

                <Link className={"flex bg-gradient-to-r from-pink-500 to-blue-600 w-40 shadow-md rounded-3xl h-10 justify-center items-center"} href={"/"}>
                    <span className={"text-lg font-bold"}>Dark</span>
                </Link>

                <Link className={"flex bg-gradient-to-r from-pink-500 to-blue-600 w-40 shadow-md rounded-3xl h-10 justify-center items-center"} href={"/"}>
                    <span className={"text-lg font-bold"}>Dark</span>
                </Link>

                <Link className={"flex bg-gradient-to-r from-pink-500 to-blue-600 w-40 shadow-md rounded-3xl h-10 justify-center items-center"} href={"/"}>
                    <span className={"text-lg font-bold"}>Dark</span>
                </Link>
            </ul>
            {children}
        </main>
    )
}