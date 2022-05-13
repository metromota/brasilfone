import { Field} from 'formik'

function NameField({values, errors, touched, disable}){

    let isError = errors.name
    let isTouched = touched.name
    let isInvalid = isError && isTouched
    
    return(
        <div className="box-field">
            <label className={isInvalid ? 'label-error' : 'label-field'}>Nome</label>
            <Field
                type="text"
                name="name"
                className={isInvalid ? 'field-error' : 'field'}
                disabled={disable}
            />
            {/* <p className="alert-field-error">
                { isError && isTouched && 'Informe um número ou e-mail correto.'}
            </p> */}
        </div>
    )
}

export default NameField