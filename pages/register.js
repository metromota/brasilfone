import RegisterCardForm from "../components/cards/registercardform";
import LogomarcaMobile from "../components/logo/logomarcaMobile";
import LeftSide from "../components/sides/leftside";

export default function Home() {

    return (
        <div className="container-app">

            <LeftSide />

            <div className="rightside">
                <LogomarcaMobile />                
                <RegisterCardForm />
            </div>          
        
        </div>
    )
}
