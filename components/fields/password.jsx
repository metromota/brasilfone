import {Field} from "formik"
import {AiFillEye} from 'react-icons/ai'

function PasswordField({values, errors, touched, disable}){

    let isError = errors.password
    let isTouched = touched.password
    let isInvalid = isError && isTouched

    return(
        <div className="box-field">
            <label className={isInvalid ? 'label-error' : 'label-field'}>Senha</label>
            <div className="field-append">
                <Field
                    type="password"
                    name="password"
                    className={isInvalid ? 'field-error' : 'field'}
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