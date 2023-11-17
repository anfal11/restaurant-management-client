import img from "../assets/others/authentication2.png"
import { Link, useLocation, useNavigate } from "react-router-dom";
import {FcGoogle} from 'react-icons/fc'
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const Login = () => {

const navigate = useNavigate();
const location = useLocation();
const { signInWIthMail, signInWithGoogle} = useContext(AuthContext);
const axiosPublic = useAxiosPublic();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
 // console.log(email, password);
 signInWIthMail(email, password)
 .then ((res) => {
    // const user = res.user;
    toast.success("user logged in successfully");
    navigate(location?.state ? location?.state : "/")
 })
 .then((err) => {
    toast.error(err.message);
  })
  };

  const handleGoogleLogin = async () => {
    try {
       await signInWithGoogle()
       .then(res => {
          const user = res.user;
          const name = user?.displayName;
          const email = user?.email;
          const photoUrl = user?.photoURL;
          const userInfo = {name, email, photoUrl};
          axiosPublic.post("/api/v1/users", userInfo)
          .then(res => {
             toast.success("user logged in successfully");
             navigate(location?.state ? location?.state : "/")
          })
          .catch(err => {
             toast.error(err.message);
          })
       })
    } catch (err) {
       toast.error(err.message);
    }
 }
// const userInfo = {
//   email: data.res.email, 
//   name: user.displayName, 
//   photo: user.photoURL,
// }
// axiosPublic.post('', userInfo);
// toast.success("User logged in successfully");
// navigate(location?.state ? location?.state : "/");

 


  return (
    <div className="hero min-h-screen bg-base-200">
    <Helmet>
        <title>Tavern Restaurant | LogIn</title>
</Helmet>
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
        <h1 className="text-[#c49249] flex items-center gap-1">Or sign in with <FcGoogle onClick={handleGoogleLogin} className="text-3xl cursor-pointer" /> </h1>
        
        </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
