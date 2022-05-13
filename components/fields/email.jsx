import {Field} from "formik"

function EmailField({values, errors, touched, disable}){

    let isError = errors.email
    let isTouched = touched.email
    let isInvalid = isError && isTouched

    return(
        <div className="box-field">
            <label className={isInvalid ? 'label-error' : 'label-field'}>Email</label>
            <Field
                type="email"
                name="email"
                className={isInvalid ? 'field-error' : 'field'}
                disabled={disable}
            />
            {/* <p className="alert-field-error">
                { isError && isTouched &&  'Informe um e-mail correto.'}
            </p>             */}
        </div>
    )

}

export default EmailField