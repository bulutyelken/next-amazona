import Head from "next/head"
import Link from "next/link"

export default function Layout({title, children}){

    return <>
        <Head>
            <title>{title? title+" - Amazona" : "Amazona"}</title>
            <meta name="description" content="Ecommerce Website"/>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="flex min-h-screen flex-col justify-between">
            <header>
                <nav className="flex h-12 justify-between shadow-md items-center px-4">
                    <Link href="/">
                        <span className="text-lg font-bold">amazona</span>
                    </Link>
                    <div>
                        <Link href="/cart">
                            <span className="text-lg p-2">Cart</span>
                        </Link>
                        <Link href="/login">
                            <span className="text-lg p-2">Login</span>
                        </Link>
                    </div>
                </nav>
            </header>
            <main className="container m-auto mt-4 px-4">
                {children}
            </main>
            <footer className="flex h-10 justify-center items-center shadow-inner">
                <p>Copyright @ 2022 Amazona</p>
            </footer>
        </div>
    </>


}