import {Field} from 'formik'

function Privacy({values, errors, touched, disable}){

    let isError = errors.privacy
    let isTouched = touched.privacy
    let isInvalid = isError && isTouched
    let style = isInvalid ? 'radio-error' : 'radio'
    let checked = values.privacy ? true : false

    return (
        <div className='box-field  py-2'>
            <div className='flex items-center'>
                <Field 
                type='radio'
                className={style}
                name='privacy'
                checked={checked}
                value='aceito'
                />
                <p className='text-xs'>Eu li e aceito a política de privacidade da Disparo PRO!</p>
            </div>
            <p className="alert-field-error">
                { isError && isTouched &&  'Aceite os termos de uso para continuar, obrigado!'}
            </p>
        </div>
    )
}
export default Privacy