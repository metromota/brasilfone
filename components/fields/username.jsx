import {Field} from "formik"

function UsernameField({values, errors, touched, disable}){

    let isError = errors.username
    let isTouched = touched.username
    let styleLabel = isError ? 'label-error' : 'label-field'
    let style = isError ? 'field-error' : 'field'

    return(
        <div className="box-field">
            <label className={styleLabel}>Email ou Telefone</label>
            <Field
            type="text"
            name="username"
            className={style}
            disabled={disable}
            />
            <p className="alert-field-error">
                { isError && isTouched && 'Informe um número ou e-mail correto.'}
            </p>
        </div>
    )
    
}

export default UsernameField