import { Field} from 'formik'

function NameField({values, errors, touched, disable}){

    let isError = errors.name
    let isTouched = touched.name
    let isInvalid = isError && isTouched
    let styleLabel = isInvalid ? 'label-error' : 'label-field'
    let style = isInvalid ? 'field-error' : 'field'

    return(
        <div className="box-field">
            <label className={styleLabel}>Nome</label>
            <Field
            type="text"
            name="name"
            className={style}
            disabled={disable}
            />
            {/* <p className="alert-field-error">
                { isError && isTouched && 'Informe um número ou e-mail correto.'}
            </p> */}
        </div>
    )
}

export default NameField