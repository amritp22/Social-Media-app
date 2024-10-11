import { Button, Card, TextField } from '@mui/material';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { loginUserAction } from '../../Redux/auth.action';
import { useNavigate } from 'react-router';

const initialValues = {email:"",password:""}
const validationSchema = {}
const Login = () => {
    const [formValue, setFormValue] = useState();
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const handleSubmit = (values) => {
        console.log("submit functionality",values);
        dispatch(loginUserAction({data:values}))
    }
    return (
        <Card className='p-5'>
            <Formik 
            onSubmit={handleSubmit} 
            // validationSchema={validationSchema} 
            initialValues={initialValues}
            >
                <Form className='space-y-5'>
                    <div className='space-y-5'>
                     <div>
                        <Field as={TextField}
                        name="email" 
                        placeholder="email add"
                        type="email"
                        variant="outlined"
                        fullWidth
                        ></Field>
                        <ErrorMessage name="email" component={"div"} className='text-red-600'></ErrorMessage>
                     </div>
                     <div>
                        <Field as={TextField}
                        name="password" 
                        placeholder="password add"
                        type="password"
                        variant="outlined"
                        fullWidth
                        ></Field>
                        <ErrorMessage name="password" component={"div"} className='text-red-600'></ErrorMessage>
                     </div>
                     <Button sx={{paddind:"0.8rem"}}
                     type='submit'
                     variant='contained'
                     color='primary'
                     fullWidth
                     >Login
                     </Button>
                    </div>
                </Form>
            </Formik>
            <div className='flex justify-center gap-4 pt-5'>
                <p>dont have an account register</p>
                <Button onClick={()=>navigate("/register")}> Register</Button>
            </div>
        </Card>
    )
}

export default Login
