import {Field} from "formik"

function NumberField(){

    return(
        <div className="box-field">
            <label>Número</label>
            <Field
                type="text"
                name="number"
            />
            <div>errors</div>
        </div>
    )
}

export default NumberField