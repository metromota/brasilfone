import {Field} from 'formik'

function Newsletter({values, errors, touched, disable}){

    return (
        <div className='flex flex-col py-2'>

            <div className='w-full'>
                <p className='text-xs text-center'>Quero receber ofertas,novidades, conteúdos informativos e publicitários da Disparo Pro</p>
            </div>

            <div className='flex items-center justify-center'>

               <label>
                <Field type='radio' className='radio' name='newsletter' checked={values.newsletter === 'Sim'} value='Sim' /> Sim                    
               </label>

               <label>
                <Field type='radio' className='radio' name='newsletter' checked={values.newsletter === 'Não'} value='Não'/> Não                    
               </label>

            </div>

        </div>
    )
}

export default Newsletter