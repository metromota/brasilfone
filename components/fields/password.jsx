import {Field} from "formik"
import {AiFillEye} from 'react-icons/ai'
import { useState } from "react"

function PasswordField({values, errors, touched, disable}){

    let [isHide, setHide] = useState(true)

    let isError = errors.password
    let isTouched = touched.password
    let isInvalid = isError && isTouched
    let type = isHide ? 'password' : 'text'

    let handleShowPassword = ()=> setHide(!isHide)

    return(
        <div className="box-field">
            <label className={isInvalid ? 'label-error' : 'label-field'}>Senha</label>
            <div className="field-append">
                <Field
                    type={type}
                    name="password"
                    className={isInvalid ? 'field-error' : 'field'}
                    disabled={disable}
                />
                <AiFillEye 
                className={isHide ? "item-field-append-right" : "item-field-append-right-show"}  
                onClick={handleShowPassword} />
            </div>
            {/* <p className="alert-field-error">
                { isError && isTouched &&  'Informe uma senha correta.'}
            </p>             */}
        </div>
    )

}

export default PasswordField