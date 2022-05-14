import { Field } from 'formik'


function Tel({values, errors, touched, disable}){

    let isErrorTel = errors.tel
    let isTouchedTel = touched.tel
    let isInvalidTel = isErrorTel && isTouchedTel
    let style = isInvalidTel ? 'field-tel-error' : 'field-tel'

    return(
        <div className="box-field">
            <Field
            type="text"
            name="tel"
            className={style}
            disabled={disable}
            />          
        </div>
    )
}

export default Tel