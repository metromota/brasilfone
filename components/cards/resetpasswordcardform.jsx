import { Form, Formik } from "formik";
import Link from "next/link";
import ErrorAlert from "../alerts/error";
import Submit from "../buttons/submit";
import PasswordField from "../fields/password";
import EmailField from "../fields/email";
import PasswordFieldConfirm from "../fields/passwordconfirm";
import PasswordNewField from '../fields/passwordnew'
import reset_schema from '../../schemas/reset_schema'

function ResetPasswordCardForm(){
    
    let initialValueForm = {
        email:'',
        password:'',
        passwordnew:'',
        passwordconfirm:''
    }

    let renderForm = ({values, errors, touched})=>(
        <Form>
            
            <EmailField values={values} errors={errors} touched={touched} disable={false} />

            { (!errors.email && touched.email) && (values.email) &&
                <>
                    <PasswordField values={values} errors={errors} touched={touched} disable={false} />
                    <PasswordNewField values={values} errors={errors} touched={touched} disable={false} />
                    <PasswordFieldConfirm values={values} errors={errors} touched={touched} disable={false} />
                </>
            }

            { 
                (errors.email && touched.email) &&
                <ErrorAlert message='O campo Email precisa estar correto, tente novamente'/>
            }

            { 
                (
                    (!!(touched.password && errors.password)) || (!!(touched.passwordnew && errors.passwordnew)) || (!!(touched.passwordconfirm && errors.passwordconfirm))
                ) &&
                <ErrorAlert message='O campos precisam estar corretos, tente novamente'/>
            } 

            <Submit value="Resetar" />
        </Form>
    )

    return(
        <div className="card-form">

            <h2>Resetar Senha</h2>
            
            <Formik  
            initialValues={initialValueForm} 
            validationSchema={reset_schema}   
            onSubmit={(values, actions)=>{ 
                console.log(values)
            }}       
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

export default ResetPasswordCardForm