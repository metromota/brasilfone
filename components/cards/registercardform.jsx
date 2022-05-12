import { Form, Formik } from "formik";
import Submit from "../buttons/submit";
import PasswordField from "../fields/password";
import NameField from "../fields/name";
import ErrorAlert from "../alerts/error";

function RegisterCardForm(){
    return(
        <div className="card-form">
            <h2>Cadastre-se</h2>
            <Formik
            >
            {
                ({values, errors, touched})=>(
                    <Form>
                        <NameField values={values} errors={errors} touched={touched} disable='false'/>
                        <PasswordField values={values} errors={errors} touched={touched} disable='false'/>
                        { 
                            errors.name && errors.password && 
                            <ErrorAlert message='Usuário ou senha inserido está incorreto, tente novamente'/>
                        }
                        <Submit value="Cadastrar" />
                    </Form>
                )
            }
            </Formik>
        </div>
    )
}
export default RegisterCardForm