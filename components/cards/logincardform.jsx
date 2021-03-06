import { Form, Formik } from "formik";
import Link from "next/link";
import ErrorAlert from "../alerts/error";
import Submit from "../buttons/submit";
import PasswordField from "../fields/password";
import UsernameField from "../fields/username";
import login_schema from '../../schemas/login_schema'

function LoginCardForm(){
    
    let initialValueForm = {
        username:'',
        password:''
    }

    let renderForm = ({values, errors, touched})=>(
        <Form>
            <UsernameField values={values} errors={errors} touched={touched} disable={false} />
            <PasswordField values={values} errors={errors} touched={touched} disable={false}/>  
            { 
                (errors.username &&  touched.username || touched.password && errors.password) &&
                <ErrorAlert message='Usuário ou senha inserido está incorreto, tente novamente'/>
            }
            <Submit value="Conectar" />
        </Form>
    )

    return(
        <div className="card-form">

            <h2>Conecte-se</h2>
            
            <Formik  
            initialValues={initialValueForm} 
            validationSchema={login_schema}   
            onSubmit={(values, actions)=>{ console.log(values) }}       
            >
                { renderForm }   
            </Formik> 

            <p>Ainda não é cliente Disparo Pro?</p>
            
            <Link href="/register" >
                <a className="link">Criar Conta</a>
            </Link>       
        </div>
    )
}

export default LoginCardForm