import * as Yup from 'yup'

let register_schema = Yup.object().shape({
    name: Yup.string().min(5).max(100).required('O Campo não foi inserido, digite e tente novamente.'),
    password: Yup.string().min(8).max(60).required('O Campo não foi inserido, digite e tente novamente.'),
    passwordconfirm: Yup.string().oneOf([Yup.ref('password'), null]).required('O Campo não foi inserido, digite e tente novamente.'),
    email: Yup.string().min(5).max(100).email().required('O Campo não foi inserido, digite e tente novamente.'),
    ddi: Yup.string().required('O Campo não foi inserido, digite e tente novamente.'),
    tel: Yup.string().matches(/^\d{9,11}$/).required('O Campo não foi inserido, digite e tente novamente.'),
    privacy:Yup.string().required('Aceite os termos de uso para continuar, obrigado!'),
    newsletter:Yup.string().required('Aceite os termos de uso para continuar, obrigado!')
})

export default register_schema