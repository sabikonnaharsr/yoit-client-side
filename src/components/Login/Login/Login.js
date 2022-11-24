import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from "../../Contexts/AuthProvider";
import Swal from "sweetalert2";


const Login = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const {signIn} = useContext(AuthContext);
    const [loginError, setLoginError] = useState('')
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';


    const handleLogin =(data)=> {
    console.log(data)

    // reset login error
    setLoginError('');
    signIn(data.email, data.password)
    .then(result => {
      const user = result.user;
      // form.reset(true)
      console.log(user);  
      navigate(from, {replace: true})
      Swal.fire({
        icon: "success",
        title: "SingIn Success!",
        showConfirmButton: false,
        timer: 1500,
      });
      
    })
    .catch(error =>{
       console.log(error.message);
       setLoginError(error.message)
       })
   
  }
    return (
        
     <div className="h-[800px] flex justify-center items-center">
        <div className="p-10 text-xl">

       {/* form start */}
        <form onSubmit={handleSubmit(handleLogin)} className="shadow-2xl lg:px-24 sm:px-32 py-16">
        <h1 className="text-4xl text-center font-bold text-slate-600">Login</h1>
          <div className="form-control flex text-slate-700  justify-between">
          {/* Name */}
            <label className="label">
              <span className="label-text text-slate-600">Name</span>
            </label>
            <input type="firstName" {...register("firstName")} 
            className='input input-bordered input-primary w-full max-w-xs'/>
          </div>


          {/* email */}
          <div className="form-control text-slate-700 w-full max-w-xs">
            <label className="label">
              <span className="label-text text-slate-600">Email</span>
            </label>
            <input type="email" 
             {...register("email", {required: 'Email is required'})} className='input  input-primary input-bordered w-full max-w-xs'/>
             {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
          </div>


          {/* password */}
          <div className="form-control text-slate-700 w-full max-w-xs">
            <label className="label">
              <span className="label-text text-slate-600">Password</span>
            </label>
            <input  type="password" {...register("password", {
            required: 'Password is required', 
            minLength: {value: 6, message: 'password should be 6 character or longer'},
           })} 
            className='input input-bordered input-primary w-full max-w-xs'/>
            {errors.password && <small className="text-red-700 text-xm">{errors.password.message}</small>}
            <p>{loginError && <small className="text-red-700">{loginError}</small>}</p>
          </div>


          {/* submit */}
          <input className="btn text-xl bg-white text-slate-600 mt-4 font-bold text-center input-primary w-full max-w-xs"value='Login' type='submit' />
          <div className="form-control text-slate-700 w-full max-w-xs"> 
            <small className="text-slate-700 text-sm">New to create account  
            <Link className="text-blue-700 text-xs" to='/login'><Link to='/signup'> signup</Link></Link></small>

             
          {/* divider */}
            <div className="flex flex-col w-full border-opacity-50">
              <div className="divider text-blue-900"><small className="text-sm">Login with social accounts</small></div>  
            </div> 
            <div className="flex justify-center items-center gap-3 text-2xl">
              <span className='text-blue-700'> <FaGoogle></FaGoogle></span>
              <span className="text-black"><FaGithub></FaGithub></span>
              <Link className='text-sky-500'><FaFacebook></FaFacebook></Link>
            </div>
          </div>
        </form>
      </div>
  </div>
    );
};

export default Login;