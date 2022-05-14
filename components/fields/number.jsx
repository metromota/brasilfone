import { Field } from 'formik'

function NumberField({values, errors, touched, disable}){

    let isError = errors.number
    let isTouched = touched.number
    let isInvalid = isError && isTouched
    let style = isInvalid ? 'field-error' : 'field'
    
    return(
        <div className="box-field">
            <Field
            type="text"
            name="number"
            className={style}
            disabled={disable}
            />                
            {/* <p className="alert-field-error">
                { isError && isTouched && 'Informe um número correto.'}
            </p> */}
        </div>
    )
}

export default NumberField