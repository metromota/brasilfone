import LeftSide from "../components/sides/leftside";
import LogomarcaMobile from "../components/logo/logomarcaMobile";
import ResetPasswordCardForm from "../components/cards/resetpasswordcardform";

export default function Home() {

    return (
        <div className="container-app">

            <LeftSide />

            <div className="rightside">
                <LogomarcaMobile />  
                <ResetPasswordCardForm />                    
            </div>          
        
        </div>
    )
}

