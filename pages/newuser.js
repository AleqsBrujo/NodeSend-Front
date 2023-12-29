import { Layout } from "@/components/Layout"
import { useFormik } from "formik"
import * as Yup from 'yup'


const NewUser = () => {

    //Formulario y validacion con Formik y Yup!
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            name: Yup.string()
                     .required('El Nombre es Obligatorio!'),
            email: Yup.string()
                       .email('Formato de Email Invalido')
                       .required('El Email es Obligatorio'),
            password: Yup.string()
                         .required('El password es Obligatorio')
                         .min(6, 'El password debe contener al menos 6 caracteres')                       
        }),
        onSubmit: (values) => {
            console.log(values)
        }
    })

    const { name, email, password} = formik.values

  return (
    <Layout>
        <div className="md:w-4/5 xl:w-3/5 mx-auto mb-32">
            <h2 className="text-4xl font-sans font-bold text-gray-800 text-center my-4">Crear Cuenta</h2>
            <div className="flex justify-center mt-5">
                <div className="w-full max-w-lg">
                    <form className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4"
                          onSubmit={formik.handleSubmit}>
                        <div className="mb-4">
                            <label  htmlFor="name"
                                    className="block text-gray-700 text-sm font-bold mb-2 uppercase">Nombre</label>
                            <input type="text"
                                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                                              leading-tight focus:outline-none focus:border-black"
                                    id="name"
                                    placeholder="Nombre de Usuario"
                                    value={name}
                                    onChange={formik.handleChange}/>
                            { formik.touched.name && formik.errors.name ? (
                                <div className="my-2 rounded-md bg-red-800 text-center  text-white p-1 ">
                                    <p>{formik.errors.name}</p>
                                </div>
                            ) : null }        
                                               
                        </div>
                        <div className="mb-4">
                            <label  htmlFor="email"
                                    className="block text-gray-700 text-sm font-bold mb-2 uppercase">Email</label>
                            <input type="email"
                                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                                              leading-tight focus:outline-none focus:border-black"
                                    id="email"
                                    placeholder="Email de Usuario"
                                    value={email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}/>

                            { formik.touched.email && formik.errors.email ? (
                                <div className="my-2 rounded-md bg-red-800 text-center  text-white p-1 ">
                                    <p>{formik.errors.email}</p>
                                </div>
                            ) : null }

                        </div>
                        <div className="mb-4">
                            <label  htmlFor="password"
                                    className="block text-gray-700 text-sm font-bold mb-2 uppercase">Password</label>
                            <input type="password"
                                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                                              leading-tight focus:outline-none focus:border-black"
                                    id="password"
                                    placeholder="Password de Usuario"
                                    value={password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}/>

                            { formik.touched.password && formik.errors.password ? (
                                <div className="my-2 rounded-md bg-red-800 text-center  text-white p-1 ">
                                    <p>{formik.errors.password}</p>
                                </div>
                            ) : null }        
                        </div>

                        <input type="submit"
                               className="bg-black mt-2 rounded-md hover:bg-red-500  text-white w-full p-2
                                uppercase font-bold hover:cursor-pointer"
                                value={'Crear Cuenta'}
                                onBlur={formik.handleBlur}/>

                    </form>
                </div>

            </div>
        </div>

    </Layout>
  )
}

export default NewUser