import {Field} from "formik"
import {AiFillEye} from 'react-icons/ai'
import { useState } from "react"

function PasswordNewField({values, errors, touched, disable}){

    let [isHide, setHide] = useState(true)

    let isError = errors.passwordnew
    let isTouched = touched.passwordnew
    let isInvalid = isError && isTouched
    let styleLabel = isInvalid ? 'label-error' : 'label-field'
    let stylePassword = isInvalid ? 'field-error' : 'field'
    let type = isHide ? 'password' : 'text'
    let styleEye = isHide ? "item-field-append-right" : "item-field-append-right-show"

    let handleShowPassword = ()=> setHide(!isHide)

    return(
        <div className="box-field">
            <label className={styleLabel}>Nova Senha</label>
            <div className="field-append">
                <Field
                type={type}
                name="passwordnew"
                className={stylePassword}
                disabled={disable}
                />
                <AiFillEye 
                className={styleEye}  
                onClick={handleShowPassword} />
            </div>
            <p className="alert-field-error">
                { isError && isTouched &&  'Informe uma senha correta.'}
            </p>
        </div>
    )

}

export default PasswordNewField