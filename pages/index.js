import Link from "next/link"

export default function Home() {

    return (
        <div className="container-app">

            <div className="w-screen h-screen flex justify-center items-center">
                <Link href='/login'>
                    <button className="btn-default">Ir Login</button>
                </Link>
                <Link href='/register'>
                    <button className="btn-default">Ir Cadastro</button>
                </Link>
            </div>

        </div>
    )
}
