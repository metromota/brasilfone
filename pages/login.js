import LoginCardForm from "../components/cards/logincardform";
import Logomarca from "../components/logo/logomarca";

export default function Home() {

    return (
        <div className="container-app">

            <div className="leftside">

                <div className="container-logomarca">
                    <Logomarca />
                </div>

            </div> 

            <div className="rightside">
                <LoginCardForm />               
            </div>          
        
        </div>
    )
}

