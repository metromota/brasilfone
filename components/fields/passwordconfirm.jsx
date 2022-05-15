import { useState } from "react"
import {Field} from "formik"
import {AiFillEye} from 'react-icons/ai'

function PasswordFieldConfirm({values, errors, touched, disable}){

    let [isHide, setHide] = useState(true)

    let isError = errors.passwordconfirm
    let isTouched = touched.passwordconfirm
    let isInvalid = isError && isTouched
    let type = isHide ? 'password' : 'text'
    let styleLabel = isInvalid ? 'label-error' : 'label-field'
    let stylePassword = isInvalid ? 'field-error' : 'field'
    let styleEye = isHide ? "item-field-append-right" : "item-field-append-right-show"

    let handleShowPassword = ()=> setHide(!isHide)

    return(
        <div className="box-field">
            <label className={styleLabel}>Repetir Senha</label>
            <div className="field-append">
                <Field
                type={type}
                name="passwordconfirm"
                className={stylePassword}
                disabled={disable}
                />
                <AiFillEye 
                className={styleEye} 
                onClick={handleShowPassword} />
            </div>
            <p className="alert-field-error">
                { (isError && isTouched) &&  isError}
            </p>
        </div>
    )

}

export default PasswordFieldConfirm