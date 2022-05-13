import {Field} from "formik"
import {AiFillEye} from 'react-icons/ai'
import { ErrorMessage } from "formik"

function PasswordField({values, errors, touched, disable}){

    let isError = errors.password
    let isTouched = touched.password

    return(
        <div className="box-field">
            <label className={isError ? 'label-error' : 'label-field'}>Senha</label>
            <div className="field-append">
                <Field
                    type="password"
                    name="password"
                    className={isError ? 'field-error' : 'field'}
                    disabled={disable}
                />
                <AiFillEye className="item-field-append-right" />
            </div>
            {/* <p className="alert-field-error">
                { isError && isTouched &&  'Informe uma senha correta.'}
            </p>             */}
        </div>
    )

}

export default PasswordField