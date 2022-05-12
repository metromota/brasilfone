import {Field} from "formik"
import {AiFillEye} from 'react-icons/ai'
import { ErrorMessage } from "formik"

function PasswordField({values, errors, touched, disable}){

    return(
        <div className="box-field">
            <label>Senha</label>
            <div className="field-append">
                <Field
                    type="password"
                    name="password"
                    className="field"
                    disabled={disable}
                />
                <AiFillEye className="item-field-append-right" />
            </div>
            <ErrorMessage name='username'>
                Informe uma senha correta.
            </ErrorMessage>
        </div>
    )

}

export default PasswordField