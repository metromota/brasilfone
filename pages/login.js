import LoginCardForm from "../components/cards/logincardform";
import LeftSide from "../components/sides/leftside";
import Logomarca from "../components/logo/logomarca";

export default function Home() {

    return (
        <div className="container-app">

            <LeftSide />

            <div className="rightside">
                <div className="container-mobile-logomarca">
                    <Logomarca />
                </div>
                <LoginCardForm />               
            </div>          
        
        </div>
    )
}

