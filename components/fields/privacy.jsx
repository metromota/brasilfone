import {Field} from 'formik'

function Privacy({values, errors, touched, disable}){
    return (
        <div className='box-field'>
            <div className='flex items-center'>
                <Field 
                    type='radio'
                    className='radio'
                    name='privacy'
                    checked={false}
                />
                <p>Eu li e aceito a política de privacidade da Disparo PRO!</p>
            </div>
        </div>
    )
}
export default Privacy