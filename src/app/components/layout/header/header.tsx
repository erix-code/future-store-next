"use Client"

import Link from "next/link";

export default function Header () {
    console.log("Header");
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/store">Tienda</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}