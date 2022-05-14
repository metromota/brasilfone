import {Field} from 'formik'

function Privacy({values, errors, touched, disable}){

    let isError = values.privacy
    let isTouched = touched.privacy
    let isInvalid = isError && isTouched

    return (
        <div className='box-field  py-2'>
            <div className='flex items-center'>
                <Field 
                    type='radio'
                    className={isInvalid ? 'radio-error' : 'radio'}
                    name='privacy'
                    checked={values.privacy ? true : false}
                    value='aceito'
                />
                <p className='text-xs'>Eu li e aceito a política de privacidade da Disparo PRO!</p>
            </div>
        </div>
    )
}
export default Privacy