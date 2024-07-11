import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import LoginLogo from "../logos/login-logo";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getSignIn, getSignUp } from "../actions/action-creators";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Logo from "../logos/logo";


const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const signInStatus = useSelector((state) => state.signIn.status)
    
    useEffect(()=>{
        if (signInStatus ==="success"){
            navigate("/homepage");
        }
    },[signInStatus,navigate]);


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const initialValues = {
        email: "",
        password: ""
    };

    const validationSchema = Yup.object({
        // name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
        password: Yup.string().required('Password is required'),
    });

    const onSubmit = (values, { setSubmitting }) => {
        console.log('form submitted');
        console.log('values :', values);
        const payload = {
            // name:values.name,
            email:values.email,
            password:values.password,
            "appType":"ecommerce"
        }
        dispatch(getSignIn(payload))
        setSubmitting(false);

    };

    return (
        <>
            <div className="flex flex-col h-full w-screen md:hidden">
                <div className="h-2/5 w-screen bg-gray-100">
                <div className="w-full  flex flex-col relative justify-center items-center ">
                    <div className="text-center mt-10 mb-10 flex">
                        <div className="mt-2">
                            <Logo />
                        </div>
                        <div>
                            <span className="font-medium text-3xl">Nex</span>
                            <span className="font-thin text-3xl">Tech</span>
                        </div>

                    </div>
                </div>
             </div>

             <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >
                {({ isSubmitting, handleChange, handleBlur, values, errors, touched }) => (
                    <Form className="form-container w-full md:w-1/2 items-center justify-center h-full flex p-4 md:p-0">
                        <div className="flex gap-6 flex-col w-full max-w-md">
                            <div className="text-center flex flex-col gap-2 p-4">
                                <h1 className="text-2xl font-bold">Sign In</h1>
                                <p>Welcome back! Please enter your details.</p>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email or phone number *</label>
                                <Field
                                    type="text"
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    className={`w-full p-2 border ${errors.email && touched.email ? 'border-red-500' : 'border-gray-300'}`}
                                />
                                <ErrorMessage name="email" component="div" className="text-red-500" />
                            </div>
                            <div className="form-group relative">
                                <label htmlFor="password">Password *</label>
                                <Field
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    className={`w-full p-2 border ${errors.password && touched.password ? 'border-red-500' : 'border-gray-300'}`}
                                />
                                <span onClick={togglePasswordVisibility} className="absolute right-2 top-8 cursor-pointer">
                                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                                </span>
                                <ErrorMessage name="password" component="div" className="text-red-500" />
                            </div>
                            <div className="flex justify-between">
                                <Link to="/signup" className="text-blue-700">Sign Up</Link>
                                <button type="button" className="font-bold">Forget Password?</button>
                            </div>
                            <button type="submit" disabled={isSubmitting} className="bg-black text-white p-2 rounded mt-4">Sign In</button>
                        </div>
                    </Form>
                )}
            </Formik>
            
            
            </div>


            <div className=" hidden md:flex h-full w-screen">
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >
                {({ isSubmitting, handleChange, handleBlur, values, errors, touched }) => (
                    <Form className="form-container w-1/2 items-center justify-center h-screen flex">
                        <div className="flex gap-6 flex-col">
                            <div className="text-center flex flex-col gap-2 p-4">
                                <h1 className="text-2xl font-bold">Sign In</h1>
                                <p>Welcome back! Please enter your details.</p>
                            </div>
                            {/* <div className="form-group">
                                <label htmlFor="name">Name *</label>
                                <Field
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Enter your name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                    className={`w-full p-2 border ${errors.name && touched.name ? 'border-red-500' : 'border-gray-300'}`}
                                />
                                <ErrorMessage name="name" component="div" className="text-red-500" />
                            </div> */}
                            <div className="form-group">
                                <label htmlFor="email">Email or phone number *</label>
                                <Field
                                    type="text"
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    className={`w-full p-2 border ${errors.email && touched.email ? 'border-red-500' : 'border-gray-300'}`}
                                />
                                <ErrorMessage name="email" component="div" className="text-red-500" />
                            </div>
                            <div className="form-group relative">
                                <label htmlFor="password">Password *</label>
                                <Field
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    className={`w-full p-2 border ${errors.password && touched.password ? 'border-red-500' : 'border-gray-300'}`}
                                />
                                <span onClick={togglePasswordVisibility} className="absolute right-2 top-8 cursor-pointer">
                                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                                </span>
                                <ErrorMessage name="password" component="div" className="text-red-500" />
                            </div>
                            <div className="flex justify-between">
                                <Link to= "/signup" className="text-blue-700">Sign Up</Link>
                                <button type="button" className="font-bold">Forget Password?</button>
                            </div>
                            <button type="submit" disabled={isSubmitting} className="bg-black text-white p-2 rounded mt-4">Sign In</button>
                        </div>
                    </Form>
                )}
            </Formik>
            <div className="w-1/2 h-screen bg-gray-100">
                <div className="w-full h-screen flex flex-col relative justify-center items-center">
                    <div className="text-center mb-10">
                        <div>
                            <span className="font-medium text-5xl">Nex</span>
                            <span className="font-thin text-5xl">Tech</span>
                        </div>
                        <div>
                            <LoginLogo />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>




    );
}

export default Login;
