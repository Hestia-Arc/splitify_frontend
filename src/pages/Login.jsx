import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/split-logo.png";
import groupImage from "../assets/images/authImage.png";
import { ButtonPrimary } from "../components/elements/Button";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/actions/auth/login";
import { useValidation } from "../utils/auth";
import { StateLoader } from "../utils/sections";

const inputStyle =
  "h-9 border text-[16px] shadow-md bg-transparent px-2 py-1 border-[#B70569] rounded";
const labelStyle = "text-[16px] mb-1";

// ===================================================
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector((state) => state.auth.loading);
  // let [loadingee, setLoadingee] = useState(true);

  //
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const {
    emailError,
    passwordError,
    isValidEmail,
    isValidPassword,
    validateField,
  } = useValidation();

  const inputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    validateField(e.target.name, e.target.value, formData);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    let data = {
      email: formData.email,
      password: formData.password,
    };

    // console.log(data);
    dispatch(login({ data, callback: () => navigate("/dashboard") }));
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <div className="h-screen w-full bg-gradient-to-l from-gray-100 to-[#D977AF95] sm:bg-gradient-to-l sm:from-gray-100 sm:via-gray-200 sm:to-[#D977AF95]">
    <div className="h-screen sm:h-[639px] w-full relative flex overflow-y-auto  ">
      {/* ----- loader */}
      {loading && <StateLoader checkStatus={loading} />}

      {/* ---- ---------------------- left */}
      {/* <div className=" h-full flex-1 flex flex-col items-center bg-gradient-to-r from-gray-200 to-rose-300 bg-[#D977AF] p-1 sm:p-0 "> */}

      <div className=" h-full flex-1 flex flex-col items-center p-1 sm:p-0 ">
        {/* logo */}
        <div className="w-full flex justify-center p-2">
          <img
            src={logo}
            className="h-[100px] w-[100px]"
            alt="group with phone"
          />
        </div>

        {/* form */}
        {/* <div className=" w-1/2 bg-cool-white-100 bg-opacity-80 border-gray-800 h-[79%] flex flex-col items-center  rounded-t-[30px] sm:rounded-tl-[80px] sm:rounded-tr-[0px] rou mt-2 py-4 pb-10 sm:py-8  "> */}

        <div className="w-[90%] h-fit sm:h-[79%] sm:w-[70%]  bg-transparent border border-pink-300 border-opacity-50  flex flex-col items-center shadow-2xl rounded-2xl mt-2 py-4 pb-10 sm:py-8  ">
          <div className="text-subTitle font-bold ">Welcome Back!</div>

          <form
            onSubmit={submitHandler}
            className="w-4/5 sm:w-3/5 flex flex-col gap-4 mt-8 "
          >
            {/* ----- 1 */}
            <div className="flex flex-col">
              <label className={labelStyle} htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className={inputStyle}
                value={formData.email}
                onChange={inputChange}
                required
              />
              {emailError && <div>{emailError}</div>}
            </div>

            {/* ------- 3 */}
            <div className="flex flex-col">
              <label className={labelStyle} htmlFor="password">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className={inputStyle}
                value={formData.password}
                onChange={inputChange}
                required
              />
              {passwordError && <div>{passwordError}</div>}
            </div>

            {/* ------ btn */}

            <ButtonPrimary
              text="Log In"
              style="bg-[#B70569] text-cool-white-100 w-full"
            />
          </form>
          <div>
            <div className="text-[14px] text-[#777] mt-2">
              Don't have an account?{" "}
              <Link to="/signup" className="text-[#B70569] font-bold ml-1">
                Create Account
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------ right */}
      <div className=" hidden sm:flex w-2/5  justify-end ">
        <img
          src={groupImage}
          className="h-[642px] w-[590px]"
          alt="group with phone"
        />
      </div>
    </div>
    </div>
  );
}

export default Login;
