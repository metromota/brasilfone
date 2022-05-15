import * as Yup from 'yup'

let reset_schema = Yup.object().shape({
    passwordnew: Yup.string().min(8).max(60).required('O Campo não foi inserido, digite e tente novamente.'),
    password: Yup.string().min(8).max(60).required('O Campo não foi inserido, digite e tente novamente.'),
    passwordconfirm: Yup.string().oneOf([Yup.ref('password'), null]).required('O Campo não foi inserido, digite e tente novamente.'),
    email: Yup.string().min(5).max(100).email().required('O Campo não foi inserido, digite e tente novamente.'),
})

export default reset_schema