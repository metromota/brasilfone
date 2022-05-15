import {Field} from 'formik'

function Newsletter({values, errors, touched, disable}){

    let isError = errors.newsletter
    let isTouched = touched.newsletter

    let isYes = values.newsletter === 'Sim'
    let isNot = values.newsletter === 'Não'

    return (
        <div className='flex flex-col py-2'>

            <div>
                <p className='question'>Quero receber ofertas,novidades, conteúdos informativos e publicitários da Disparo Pro</p>
            </div>

            <div className='center-content'>

               <label className='mx-2'>
                   <Field type='radio' className='radio' name='newsletter' checked={isYes} value='Sim' /> Sim                    
               </label>

               <label className='mx-2'>
                   <Field type='radio' className='radio' name='newsletter' checked={isNot} value='Não'/> Não                    
               </label>

            </div>

            <p className="alert-field-error">
                { isError && isTouched && 'Deseja permitir que a Disparo Pro envie publicações e promoções por e-mail e SMS'}
            </p>

        </div>
    )
}

export default Newsletter