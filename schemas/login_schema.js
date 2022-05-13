import * as Yup from 'yup'

let login_schema = Yup.object().shape({
    username: Yup.string().required().max(100).min(5),
    password: Yup.string().required().max(60).min(8)
})

export default login_schema