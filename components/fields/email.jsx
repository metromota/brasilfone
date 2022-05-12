import {Field} from "formik"

function EmailField(){

    return(
        <div className="box-field">
            <label>Email</label>
            <Field
                type="email"
                name="email"
            />
            <div>errors</div>
        </div>
    )
    
}

export default EmailField