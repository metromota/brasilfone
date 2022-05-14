import { Form, Formik } from "formik";
import Submit from "../buttons/submit";
import PasswordField from "../fields/password";
import PasswordFieldConfirm from "../fields/passwordconfirm";
import NameField from "../fields/name";
import ErrorAlert from "../alerts/error";
import EmailField from "../fields/email";
import NumberTel from "../fields/numbertel";
import Privacy from "../fields/privacy";
import Newsletter from "../fields/newsletter";

import register_schema from "../../schemas/register_schema";

function RegisterCardForm(){

    let initialValueForm = {
        name:'',
        password:'',
        passwordconfirm:'',
        email:'',
        ddi:55,
        tel:'',
        privacy:'',
        newsletter:'Não',
    }

    let renderForm = ({values, errors, touched})=>(
        <Form>
            <NameField values={values} errors={errors} touched={touched} disable={false}/>
            <EmailField values={values} errors={errors} touched={touched} disable={false}/>
            <NumberTel values={values} errors={errors} touched={touched} disable={false}/>
            <PasswordField values={values} errors={errors} touched={touched} disable={false}/>
            <PasswordFieldConfirm values={values} errors={errors} touched={touched} disable={false}/>
            <Privacy  values={values} errors={errors} touched={touched} disable={false}/>
            <Newsletter values={values} errors={errors} touched={touched} disable={false}/>
            { 
                (
                    (errors.name && touched.name)           ||  
                    (errors.email && touched.email)         || 
                    (errors.tel && touched.tel)             || 
                    (errors.ddi && touched.ddi)             ||
                    (errors.password && touched.password)   || 
                    (errors.passwordconfirm && touched.passwordconfirm) 
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
            onSubmit={(values, actions)=>{ console.log(values)  }}
            >
                { renderForm }
            </Formik>
        </div>
    )
}
export default RegisterCardForm