import * as Yup from 'yup'

let login_schema = Yup.object().shape({
    username: Yup.string().min(5).max(100).nullable(),
    password: Yup.string().min(8).max(60).nullable()
})

export default login_schema