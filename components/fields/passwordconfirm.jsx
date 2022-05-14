import {Field} from "formik"
import {AiFillEye} from 'react-icons/ai'

function PasswordFieldConfirm({values, errors, touched, disable}){

    let isError = errors.passwordconfirm
    let isTouched = touched.passwordconfirm
    let isInvalid = isError && isTouched

    return(
        <div className="box-field">
            <label className={isInvalid ? 'label-error' : 'label-field'}>Repetir Senha</label>
            <div className="field-append">
                <Field
                    type="password"
                    name="passwordconfirm"
                    className={isInvalid ? 'field-error' : 'field'}
                    disabled={disable}
                />
                <AiFillEye className="item-field-append-right" />
            </div>
            {/* <p className="alert-field-error">
                { isError && isTouched &&  'Os campos de senha não são iguais.'}
            </p>             */}
        </div>
    )

}

export default PasswordFieldConfirm