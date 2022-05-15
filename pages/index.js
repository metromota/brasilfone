import Link from "next/link"

export default function Home() {

    return (
        <div className="container-app">

            <div className="homepage-buttons">
                <Link href='/login'>
                    <button className="btn-default">Ir Login</button>
                </Link>
                <Link href='/register'>
                    <button className="btn-default">Ir Cadastro</button>
                </Link>
                <Link href='/reset'>
                    <button className="btn-default">Ir Reset</button>
                </Link>
            </div>

        </div>
    )
}
