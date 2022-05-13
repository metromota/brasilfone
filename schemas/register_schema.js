import * as Yup from 'yup'

let register_schema = Yup.object().shape({
    name: Yup.string().min(5).max(100).required(),
    password: Yup.string().min(8).max(60).required(),
    email: Yup.string().min(5).max(100).email().required(),
    ddi: Yup.string().required(),
    tel: Yup.string().matches(/^\d{9,11}$/).required(),
})

export default register_schema