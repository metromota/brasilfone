import { Field } from 'formik'

function NumberField({values, errors, touched, disable}){

    let isError = errors.number
    let isTouched = touched.number
    let isInvalid = isError && isTouched
    
    return(
        <div className="box-field">
            <Field
                type="text"
                name="number"
                className={isInvalid ? 'field-error' : 'field'}
                disabled={disable}
            />                
            {/* <p className="alert-field-error">
                { isError && isTouched && 'Informe um número correto.'}
            </p> */}
        </div>
    )
}

export default NumberField