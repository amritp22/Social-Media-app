import { Button, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { registerUserAction } from '../../Redux/auth.action';
import { useNavigate } from 'react-router';

const initialValues = {firstName:"",lastName:"",email:"",password:"",gender:""}
const validationSchema = {}
const Register = () => {
    const [gender, setGender] = useState("");
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const handleSubmit = (values) => {
        values.gender=gender
        console.log("submit functionality",values);
        dispatch(registerUserAction({data:values}))
        navigate('/');
    }
    const handleChange = (event) => {
        setGender(event.target.value);
      };    
    return (
        <>
            <Formik 
            onSubmit={handleSubmit} 
            // validationSchema={validationSchema} 
            initialValues={initialValues}
            >
                <Form className='space-y-5'>
                    <div className='space-y-5'>
                    <div>
                        <Field as={TextField}
                        name="firstName" 
                        placeholder="firstName add"
                        type="text"
                        variant="outlined"
                        fullWidth
                        ></Field>
                        <ErrorMessage name="firstName" component={"div"} className='text-red-600'></ErrorMessage>
                     </div>   
                     <div>
                        <Field as={TextField}
                        name="lastName" 
                        placeholder="lastName add"
                        type="text"
                        variant="outlined"
                        fullWidth
                        ></Field>
                        <ErrorMessage name="lastName" component={"div"} className='text-red-600'></ErrorMessage>
                     </div> 
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
                     <div>
                            <RadioGroup
                                aria-labelledby="gender"
                                defaultValue="female"
                                name="gender"
                                onChange={handleChange}
                            >
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                 
                            </RadioGroup>
                     </div>
                     <Button sx={{paddind:"0.8rem"}}
                     type='submit'
                     variant='contained'
                     color='primary'
                     fullWidth
                     >Register
                     </Button>
                    </div>
                </Form>
            </Formik>
            <div className='flex justify-center gap-4 pt-5'>
                <p>Already have an account login</p>
                <Button onClick={()=>navigate("/")}> Login</Button>
            </div>
        </>
    )
}

export default Register
