import * as Yup from 'yup'

let reset_schema = Yup.object().shape({
    email: Yup.string().min(5).max(100).email().required('O Campo não foi inserido, digite e tente novamente.'),
    password: Yup.string().min(8).max(60).required('O Campo não foi inserido, digite e tente novamente.'),
    passwordconfirm: Yup.string().min(8,'Informe uma senha correta.').max(60,'Informe uma senha correta.').oneOf([Yup.ref('passwordnew'), null],'Os campos de senha não são iguais.').required('O Campo não foi inserido, digite e tente novamente.'),
    passwordnew: Yup.string().min(8).max(60).required('O Campo não foi inserido, digite e tente novamente.'),
})

export default reset_schema