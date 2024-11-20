import React from 'react'
import * as Yup from 'yup';
import {  useFormik } from 'formik';
import {  enqueueSnackbar } from 'notistack';
import { Link, useNavigate } from 'react-router-dom'
// import useUserContext from '../UserContext';

const LoginSchema=Yup.object().shape({
    email:Yup.string().email('Invalid Email').required('*'),
    password:Yup.string().required('*').min(8,'Password is too short'),
  });

const Login = () => {

    //  const { setuserloggedIn } = useUserContext();
    const navigate = useNavigate()

    const Loginform=useFormik({
        initialValues:{
          password:"",
          email:"",
        },
        onSubmit:async(values)  =>{
          console.log(values);
          const res= await fetch('http://localhost:5000/user/authenticate',{
            method:'POST',
            body:JSON.stringify(values),
            headers:{
              'Content-Type' :'application/json'
            }

          });

          console.log(res.status);  

          const data = await res.json();
          if(res.status==200){
            enqueueSnackbar('Login successfully' ,{variant:'success'});
            sessionStorage.setItem('user', JSON.stringify(data));
            // setuserloggedIn(true);
            navigate('/')

          }else if(res.status==401){
            enqueueSnackbar('Invalid Email',{variant:'error'});

          }else{
            enqueueSnackbar('Something went wrong',{variant:'error'});
          }

        },
      });
    
  return (
    <div className=' bg-slate-50 Login'>
        <div className='col-md-4 mx-auto py-5'>
            <div className="card shadow-2xl border-emerald-400 mt-5">
                <div className="card-body p-4">
                    <h3 className="text-center text-4xl mb-3 font-semibold"> Login</h3><hr />
                    <form onSubmit={Loginform.handleSubmit}>
                            <span className='ms-4 fs-6 text-danger'>{  Loginform.errors.email}</span>
                            <input type="text" className="form-control p-3 " placeholder="Enter  Email" id="email"  onChange={Loginform.handleChange} value={Loginform.values.email}  />
                            <span className='ms-4 fs-6 text-danger'>{  Loginform.errors.password}</span>
                            <input type="password" className="form-control mb-3 p-3" placeholder="Enter Password" id="password"  onChange={Loginform.handleChange} value={Loginform.values.password}   />
                            <button type="submit" className="bg-purple-400  p-3 w-100 text-white font-semibold">Login</button>
                    </form>
                    <p className="text-center mt-3">Don't have an account? <Link to={"/Signup"} className='text-primary'>Signup Now</Link></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login