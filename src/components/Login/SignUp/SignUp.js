import React, { useContext, useState} from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from "../../Contexts/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";


const SignUp = () => {
    // react hooks form
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {createUser, updateUser, googleSignIn, githubSingIn} = useContext(AuthContext)
    const [signupError, setSignupError] = useState('');
    const navigate = useNavigate();
    
    const handleSignup =(data, e)=> {
      e.preventDefault();
      const form = e.target;
      const firstName = form.firstName.value;
      const lastName = form.lastName.value;
      const email = form.email.value;
      const photoURL = form.photoURL.value;
      const password = form.password.value;
      console.log(data,firstName, lastName, email, password, photoURL)

    setSignupError('')
    // user create
    createUser(data.email, data.password)
    .then(result => {
      navigate("/");
      const user = result.user
      console.log(user)
      toast('User Created Successfully.')
      const userInfo = {
        displayName: data.name
      }
      form.reset();
      updateUser(userInfo)
      .then(() => {
        saveUser(data.name, data.email)
      })
      .catch(err=> console.log(err))
    })
    .catch(error => {
      console.log(error)
      setSignupError(error.message)
    });
  }
   
   // google signIn
   const googleProvider = new GoogleAuthProvider();
   const handleGoogleSignIn = () => {
     googleSignIn(googleProvider)
       .then((result) => {
         const user = result.user;
         console.log(user);
         toast("User created successfully");
       })
       .catch((error) => {
         console.error(error);
         setSignupError(error.message)
       });
   };

   // github signIn
  const githubProvider = new GithubAuthProvider();
  const handleGithubSingIn = () => {
    githubSingIn(githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        alert("User successfully login");
      })
      .catch((e) => alert(e.message));
  };



  // user data save
  const saveUser = (name, email) => {
    const user = {name, email};
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      navigate("/");
      console.log('save user',data);
    })
  }


    return (
    <div className="h-[1000px] flex justify-center items-center">
      <div className="p-10 text-xl">
       {/* form start */}
        <form onSubmit={handleSubmit(handleSignup)} className="shadow-2xl lg:px-24 py-16">
        <h1 className="text-4xl text-center font-bold text-slate-600">Signup</h1>
          {/* name */}
          <div className="form-control flex text-slate-700 justify-between w-full max-w-xs">
          {/* firstName */}
            <label className="label w-100">
              <span className="label-text text-slate-600">First Name</span>
            </label>
            <input type="firstName" {...register("firstName")} 
            className='input input-bordered input-primary w-full max-w-xs'/>

          {/* lastName */}
            <label className="label">
              <span className="label-text text-slate-600">Last Name</span>
            </label>
            <input type="lastName" {...register("lastName")} 
            className='input input-bordered input-primary w-full max-w-xs'/>
          </div>


          {/* photoURL */}
           <div className="form-control flex text-slate-700 justify-between w-full max-w-xs">
            <label className="label">
              <span className="label-text text-slate-600">Photo URL</span>
            </label>
            <input type="photoURL" {...register("photoURL")} 
            className='input input-bordered input-primary w-full max-w-xs'/>
           </div>


          {/* email */}
          <div className="form-control text-slate-700 w-full max-w-xs">
            <label className="label">
              <span className="label-text text-slate-600">Email</span>
            </label>
            <input type="email" 
             {...register("email", {required: 'Email is required',
            
             })} className='input input-bordered input-primary w-full max-w-xs'/>
             {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
          </div>

          {/* password */}
          <div className="form-control text-slate-700 w-full max-w-xs">
            <label className="label">
              <span className="label-text text-slate-600">Password</span>
            </label>
            <input  type="password" {...register("password", {
              required: 'Password is required',
              minLength: {value: 6, message: 'Password should be 6 character above'}, 
              pattern: {value: /^(?=(.*[a-z]){3,})(?=(.*[A-Z]){2,})(?=(.*[0-9]){2,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{8,}$/, 
              message: 'password must be strong'}
            })} 
            className='input input-bordered text-xs w-full max-w-xs'/>
            <label className="label">
              <span className="label-text text-slate-600">Forget Password</span>
              {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
            </label>
            {signupError && <small className="text-red-800">{signupError}</small>}
          </div>

          {/* submit */}
          <input className="btn text-xl bg-white text-slate-600 font-bold text-center w-full max-w-xs"value='Signup' type='submit' />
          <div className="form-control text-slate-700 w-full max-w-xs"> 
            <small className="text-slate-600 text-sm">Already Have an Account  
            <Link className="text-sky-900 text-xs" to='/login'><Link to='/login'> Login</Link></Link></small>
             
          {/* divider */}
            <div className="flex flex-col w-full border-opacity-50">
              <div className="divider text-slate-600"><small className="text-sm">Login with social accounts</small></div>  
            </div> 
              <div className="flex justify-center items-center gap-5 text-2xl">
              <Link onClick={handleGoogleSignIn} className='text-blue-600'><FaGoogle></FaGoogle></Link>
              <Link onClick={handleGithubSingIn} className="text-black"><FaGithub></FaGithub></Link>
              <Link className='text-sky-500'><FaFacebook></FaFacebook></Link>
            </div>
          </div>
        </form>
      </div>
    </div>
    );
};

export default SignUp;