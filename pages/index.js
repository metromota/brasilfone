import Link from "next/link"
import Logomarca from "../components/logo/logomarca"

export default function Home() {

    return (
        <div className="container-app home">


            <div className="homepage-buttons">

                <Logomarca />
                
                <div className="center-content flex-col md:flex-row">
                    <Link href='/login'>
                        <button className="btn-default">Login</button>
                    </Link>
                    
                    <Link href='/register'>
                        <button className="btn-default">Cadastro</button>
                    </Link>
                    
                    <Link href='/reset'>
                        <button className="btn-default">Reset</button>
                    </Link>
                </div>

            </div>

        </div>
    )
}
