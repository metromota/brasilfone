import {ErrorMessage, Field} from 'formik'

function NameField({values, errors, touched, disable}){
    
    return(
        <div className="box-field">
            <label>Nome</label>
            <Field
                type="text"
                name="name"
                className="field"
                disabled={disable}
            />
            <ErrorMessage name='name'>
                Informe um nome de usuário correto.
            </ErrorMessage>
        </div>
    )
}

export default NameField