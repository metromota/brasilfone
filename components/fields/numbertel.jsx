import DDIField from './ddi'
import BrazilFlag from '../flags/brazilFlag'
import Tel from './tel'
             
function NumberTel({values, errors, touched, disable}){

    let isErrorTel = errors.tel
    let isTouchedTel = touched.tel
    let isInvalidTel = isErrorTel && isTouchedTel
   
    let isErrorDDI = errors.ddi
    let isTouchedDDI = touched.ddi

    let styleLabel = isInvalidTel ? 'label-error' : 'label-field'
    
    return(
        <div>
            <label className={styleLabel}>Número</label>
            <div className='container-append'>  

                <div className='box-item-append'>
                    <BrazilFlag />
                    <DDIField  values={values} errors={errors} touched={touched} disable={false}/>
                </div>
                
                <Tel  values={values} errors={errors} touched={touched} disable={false}/>

            </div>
            <p className="alert-field-error">
                { isErrorTel && isTouchedTel && 'Informe um número correto.'}
            </p>
            <p className="alert-field-error">
                { isErrorDDI && isTouchedDDI && 'Informe um DDI correto.'}
            </p>
        </div>
    )
}

export default NumberTel