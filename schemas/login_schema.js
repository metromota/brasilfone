import * as Yup from 'yup'

let login_schema = Yup.object().shape({
    username: Yup.string().min(5).max(100).matches(/^\d{9,11}|[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/).required('O Campo não foi inserido, digite e tente novamente.'),
    password: Yup.string().min(8).max(60).required('O Campo não foi inserido, digite e tente novamente.')
})

export default login_schema