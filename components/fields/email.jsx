import {Field} from "formik"

function EmailField({values, errors, touched, disable}){

    let isError = errors.email
    let isTouched = touched.email
    let isInvalid = isError && isTouched
    let style = isInvalid ? 'field-error' : 'field'
    let styleLabel = isInvalid ? 'label-error' : 'label-field'

    return(
        <div className="box-field">
            <label className={styleLabel}>Email</label>
            <Field
            type="email"
            name="email"
            className={style}
            disabled={disable}
            />
            <p className="alert-field-error">
                { isError && isTouched &&  'Informe um e-mail correto.'}
            </p>
        </div>
    )

}

export default EmailField