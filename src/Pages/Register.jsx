import { useContext, useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import img from "../assets/others/authentication2.png";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Context/AuthProvider";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const Register = () => {
  const [disabled, setDisabled] = useState(true);
  const { createUser, userUpdateProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    createUser(data.email, data.password)
        .then((result) => {
            const loggedInUser = result.user;
            // console.log(loggedInUser);
            userUpdateProfile(data.name, data.email, data.photo)
            .then (() => {
              const userInfo = {
                email: data?.email,
                name: data?.name,
                photo: data?.photo,
              }
              // console.log(userInfo);
              axiosPublic.post('/api/v1/users', userInfo)
              .then((res) => {
                if (res.data.insertedId) {
                  data.target.reset();
                  toast.success("User registered successfully");
                }
                navigate('/')
              })
            })
            .catch((error) => {
              toast.error(error.message);
            });
        })
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     const form = new FormData(e.target);
  //     const photo = form.get("photo");
  //     const name = form.get("name");
  //     const email = form.get("email");
  //     const password = form.get("password");

  //     console.log(photo, name, email, password);
  //   };

  const handleValidateCaptcha = (e) => {
    const captcha = e.target.value;
    const result = validateCaptcha(captcha);
    if (result == true) {
      setDisabled(false);
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <Helmet>
        <title>Tavern Restaurant | Register</title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row-reverse gap-20">
        <div className="text-center md:w-1/2 lg:text-left">
          <img src={img} alt="" />
        </div>
        <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold text-center p-2">Register here</h1>
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Your photo url"
                className="input input-bordered"
                {...register("photo", { required: true })}
              />
              {errors.photo && (
                <span className="text-red-500">PhotoUrl is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                name="name"
                placeholder="Your name"
                className="input input-bordered"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-red-500">Name is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-500">Email is required</span>
              )}
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
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 12,
                  pattern:
                    /(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*()-_=+])[a-zA-Z0-9!@#$%^&*()-_=+]{6,}/,
                })}
              />
              {errors.password?.type === "required" && (
                <span className="text-red-500">Password is required</span>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-500">Passwords must be 6 characters.</p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-500">
                  Passwords must be less than 12 characters.
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-500">
                  Passwords must contains at least one digit, uppercase, one
                  lowercase and a special character.
                </p>
              )}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            {/* captcha */}
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
              onBlur={handleValidateCaptcha}
                type="text"
                name="captcha"
                placeholder="type your captcha"
                className="input input-bordered"
                required
              />

              
               
              
            </div>
            <div className="form-control mt-6">
              <input
                disabled={disabled}
                className="btn bg-[#dab884]"
                type="submit"
                value="Register"
              />
            </div>
          </form>
          <div className="flex flex-col items-center pb-8">
            <h1 className="text-[#c49249]">
              Already registered?{" "}
              <Link className="underline" to="/login">
                {" "}
                Go to LogIn
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
