import { Form, Formik } from "formik";
import Submit from "../buttons/submit";
import PasswordField from "../fields/password";
import NameField from "../fields/name";
import ErrorAlert from "../alerts/error";
import EmailField from "../fields/email";
import NumberTel from "../fields/numbertel";

import register_schema from "../../schemas/register_schema";

function RegisterCardForm(){

    let initialValueForm = {
        name:'',
        password:'',
        email:'',
        ddi:55,
        tel:''
    }

    let renderForm = ({values, errors, touched})=>(
        <Form>
            <NameField values={values} errors={errors} touched={touched} disable={false}/>
            <EmailField values={values} errors={errors} touched={touched} disable={false}/>
            <NumberTel values={values} errors={errors} touched={touched} disable={false}/>
            <PasswordField values={values} errors={errors} touched={touched} disable={false}/>
            { 
                (
                    errors.name && touched.name || errors.email && touched.email || 
                    errors.tel && touched.tel   || errors.ddi && touched.ddi
                ) &&
                <ErrorAlert message='Os campos em destaque estão incorretos, tente novamente'/>
            }
            <Submit value="Cadastrar" />
        </Form>
    )

    return(
        <div className="card-form">
            <h2>Cadastre-se</h2>
            <Formik
            initialValues={initialValueForm}
            validationSchema={register_schema}
            >
                { renderForm }
            </Formik>
        </div>
    )
}
export default RegisterCardForm