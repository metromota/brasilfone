import {Field} from "formik"

function DDIField({values, errors, touched, disable}){

    let isInvalidDDI = errors.ddi && touched.ddi
    let style = isInvalidDDI ? 'ddi-error' : 'ddi'
    
    let ddiCountries = [
        {code:55}
    ]


    return(
        <div className="">
           <Field 
                as="select"
                name='ddi'
                className={style}
                >
            { ddiCountries && ddiCountries.map(
                ({code})=> <option key={ code } value={ code }> + { code } </option> 
            ) }
            </Field>          
        </div>
    )
    
}

export default DDIField