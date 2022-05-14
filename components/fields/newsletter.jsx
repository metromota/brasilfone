import {Field} from 'formik'

function Newsletter({values, errors, touched, disable}){

    let isYes = values.newsletter === 'Sim'
    let isNot = values.newsletter === 'Não'

    return (
        <div className='flex flex-col py-2'>

            <div>
                <p className='question'>Quero receber ofertas,novidades, conteúdos informativos e publicitários da Disparo Pro</p>
            </div>

            <div className='center-content'>

               <label>
                <Field type='radio' className='radio' name='newsletter' checked={isYes} value='Sim' /> Sim                    
               </label>

               <label>
                <Field type='radio' className='radio' name='newsletter' checked={isNot} value='Não'/> Não                    
               </label>

            </div>

        </div>
    )
}

export default Newsletter