import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Contexts/AuthProvider";
import Swal from "sweetalert2";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import toast from "react-hot-toast";


const Login = () => {
  const [loginError, setLoginError] = useState("");
  const { googleSignIn, githubSingIn } =
    useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signIn } = useContext(AuthContext);
  
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (data) => {
    console.log(data);

    // reset login error
    setLoginError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        // form.reset(true)
        console.log(user);
        navigate(from, { replace: true });
        Swal.fire({
          icon: "success",
          title: "SingIn Success!",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });
  };

  // google signIn
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    googleSignIn(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
        toast("User created successfully");
      })
      .catch((error) => {
        console.error(error);
        setLoginError(error.message);
      });
  };

  // github signIn
  const githubProvider = new GithubAuthProvider();
  const handleGithubSingIn = () => {
    githubSingIn(githubProvider)
      .then((result) => {
        const user = result.user;
        navigate("/");
        console.log(user);
        toast.success("Github signIn successful")

      })
      .catch((e) => 
     { setLoginError(e.message)
    }
      
      );
  };

  
  return (
    <div className="lg:w-1/4 mx-auto shadow-2xl p-10 my-10">
      {/* form start */}
      <form
        onSubmit={handleSubmit(handleLogin)}
        className=""
      >
        <h1 className="text-4xl text-center font-bold text-slate-600">Login</h1>

        {/* email */}
        <div className="form-control text-slate-700 w-full mb-3">
          <label className="label">
            <span className="label-text text-slate-600 ">Email</span>
          </label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className="input  input-primary input-bordered w-full"
          />
          {errors.email && (
            <p className="text-red-600">{errors.email?.message}</p>
          )}
        </div>

        {/* password */}
        <div className="form-control text-slate-700 w-full mb-3">
          <label className="label">
            <span className="label-text text-slate-600">Password</span>
          </label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
              value: 6,
              message: "password should be 6 character or longer",
              },
            })}
            className="input input-bordered input-primary w-full"
          />
          {errors.password && (
            <small className="text-red-700 text-xm">
              {errors.password.message}
            </small>
          )}

          <p>
            {loginError && (
              <small className="text-red-700">{loginError.slice(22, -2)}</small>
            )}
          </p>
        </div>

        {/* submit */}
        <input
          className="btn text-xl bg-white text-slate-600 mt-4 font-bold text-center input-primary w-full"
          value="Login"
          type="submit"
        />
      </form>
      <div className="form-control text-slate-700 mt-3 w-full">
        <small className="text-slate-700 text-sm">
          New to create account
          <Link to="/signup" className="text-blue-500 font-bold"> signup</Link>
        </small>

        {/* divider */}
        <div className="flex flex-col w-full border-opacity-50">
          <div className="divider text-blue-900">
            <small className="text-sm">Login with social accounts</small>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-3 text-2xl">
        <Link className="text-blue-700" onClick={handleGoogleSignIn}>
          <FaGoogle></FaGoogle>
        </Link>
        <Link className="text-black" onClick={handleGithubSingIn} >
          <FaGithub></FaGithub>
        </Link>
        <Link className="text-sky-500" >
          <FaFacebook></FaFacebook>
        </Link>
      </div>
    </div>
  );
};

export default Login;
