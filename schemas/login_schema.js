import * as Yup from 'yup'

let login_schema = Yup.object().shape({
    username: Yup.string().min(5).max(100).required(),
    password: Yup.string().min(8).max(60).required()
})

export default login_schema