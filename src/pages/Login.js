import React from 'react'
import { useFormik } from "formik"
import * as Yup from 'yup'
import '../pages-style/login-style.css'

const Login = () => {
    const formik = useFormik({
      initialValues: {
        username: "",
        password: ""
      },
      onSubmit: values => {
        console.log(values)
      },
      validationSchema: Yup.object().shape({
        username: Yup.string()
            .required("Username is required"),
        password: Yup.string()
            .min(5, "Password must contain a minimum of 5 characters")
            .required("Password is required")
        }),
    })
    

    return (

        <div className="container align-items-center mt-4 mb-4">

            <div className="row d-flex justify-content-center align-items-center">

                <div className="col-lg-5 col-sm-4">

                    {/* Formulaire */}
                    <form className="form-border" onClick={formik.handleSubmit}>

                        {/* Username Input */}
                        <div class="mb-3 pt-3">
                            <label for="exampleInputEmail1" class="form-label">Username</label>
                            <input 
                                name="username"
                                type="text" 
                                class="form-control input-bg" 
                                placeholder="Enter your username"
                                value={formik.values.username}
                                onChange={formik.handleChange}
                            />
                            {formik.errors.username && <p>{formik.errors.username}</p>}
                        </div>

                        {/* Password Input */}
                        <div class="mb-3 pt-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input 
                                name="password"
                                type="password" 
                                placeholder="Enter your password"
                                class="form-control input-bg" 
                                value={formik.values.password}
                                onChange={formik.handleChange}
                            />
                            {formik.errors.password && <p>{formik.errors.password}</p>}
                        </div>
                        
                        {/* Button Submit */}
                        <div className="d-flex justify-content-center pt-3 mb-3">
                            <button type="submit" class="btn login-btn">Submit</button>
                        </div>

                    </form>

                </div>

            </div>

        </div>
    )
}

export default Login