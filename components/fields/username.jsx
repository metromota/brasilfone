import {Field} from "formik"
import { ErrorMessage } from "formik" 

function UsernameField({values, errors, touched, disable}){

    return(
        <div className="box-field">
            <label>Email ou Telefone</label>
            <Field
                type="text"
                name="username"
                className="field"
                disabled={disable}
            />
            <ErrorMessage name='username'>
                Informe um número ou e-mail correto.
            </ErrorMessage>
        </div>
    )
    
}

export default UsernameField