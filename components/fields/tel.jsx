import { Field } from 'formik'


function Tel({values, errors, touched, disable}){

    let isErrorTel = errors.tel
    let isTouchedTel = touched.tel
    let isInvalidTel = isErrorTel && isTouchedTel

    return(
        <div className="box-field">
            <Field
                type="text"
                name="tel"
                className={isInvalidTel ? 'field-tel-error' : 'field-tel'}
                disabled={disable}
            />          
        </div>
    )
}

export default Tel