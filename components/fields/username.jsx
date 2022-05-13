import {Field} from "formik"
import { ErrorMessage } from "formik" 

function UsernameField({values, errors, touched, disable}){

    let isError = errors.username
    let isTouched = touched.username

    return(
        <div className="box-field">
            <label className={isError ? 'label-error' : 'label-field'}>Email ou Telefone</label>
            <Field
                type="text"
                name="username"
                className={isError ? 'field-error' : 'field'}
                disabled={disable}
            />
            {/* <p className="alert-field-error">
                { isError && isTouched && 'Informe um número ou e-mail correto.'}
            </p> */}
        </div>
    )
    
}

export default UsernameField