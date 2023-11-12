// import { useEffect, useRef, useState } from "react";
// import {
//   loadCaptchaEnginge,
//   LoadCanvasTemplate,
//   validateCaptcha,
// } from "react-simple-captcha";
import img from "../assets/others/authentication2.png"
import { Link } from "react-router-dom";
import {FcGoogle} from 'react-icons/fc'

const Login = () => {
//   const captchaRef = useRef(null);
//   const [disabled, setDisabled] = useState(true);

//   useEffect(() => {
//     loadCaptchaEnginge(6);
//   }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    console.log(email, password);
  };

//   const handleValidateCaptcha = () => {
//     const captcha = captchaRef.current.value;
//     const result = validateCaptcha(captcha);
//     if (result == true) {
//       setDisabled(false);
//     }
//   };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center md:w-1/2 lg:text-left">
          
          <img src={img} alt="" />
        </div>
        <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
        <h1 className="text-5xl font-bold text-center p-2">Login now!</h1>
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            {/* captcha */}
            {/* <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                ref={captchaRef}
                type="text"
                name="captcha"
                placeholder="type your captcha"
                className="input input-bordered"
                required
              />
              <button
                onClick={handleValidateCaptcha}
                className="btn btn-outline hover:bg-[#dab884] hover:border-[#dab884] btn-xs mt-3"
              >
                Validate Captcha
              </button>
            </div> */}
            <div className="form-control mt-6">
              <input 
            //   disabled={disabled}
              className="btn bg-[#dab884]" 
              type="submit" 
              value="Login" />
            </div>
          </form>
          <div className="flex flex-col items-center pb-8">
        <h1 className="text-[#c49249]">New here? <Link className="underline" to='/register'> Create a New Account</Link></h1>
        <h1 className="text-[#c49249] flex items-center gap-1">Or sign in with <FcGoogle className="text-3xl" /> </h1>
        
        </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
