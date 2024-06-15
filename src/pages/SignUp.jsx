import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useValidation } from "../utils/auth";
import logo from "../assets/images/split-logo.png";
import groupImage from "../assets/images/authImage.png";
import { ButtonPrimary } from "../components/elements/Button";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../store/actions/auth/signup";
import { StateLoader } from "../utils/sections";

const inputStyle =
  "h-9 border text-[16px] bg-transparent px-2 py-1 border-[#B70569] rounded";
const labelStyle = "text-[16px] mb-1";

// ==========================================
function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector((state) => state.auth.loading);
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPass: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    let data = {
      fullname: formData.fullname,
      email: formData.email,
      password: formData.password,
      confirmPassword: formData.confirmPass,
    };

    // console.log(data);
    dispatch(signup({ data, callback: () => navigate("/login") }));
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <div className="h-screen w-full bg-gradient-to-l from-gray-100 to-[#D977AF95] sm:bg-gradient-to-l sm:from-gray-100 sm:via-gray-200 sm:to-[#D977AF95]">

    <div className="h-screen w-full relative flex overflow-y-auto mb-4 ">
      {/* ----- loader */}
      {loading && <StateLoader checkStatus={loading} />}

      {/* -------------------------- left */}
      <div className=" h-fit flex-1 flex flex-col items-center p-1 sm:p-0 ">
        {/* logo */}
        <div className="w-full flex justify-center p-2">
          <img
            src={logo}
            className="h-[100px] w-[100px]"
            alt="group with phone"
          />
        </div>

        {/* form */}
        <div className="w-[90%] h-fit sm:h-[79%] sm:w-[70%] bg-transparent border border-pink-300 border-opacity-50 flex flex-col items-center shadow-2xl drop-shadow-lg rounded-2xl  mt-2 py-4 pb-10 sm:py-8   ">
          <div className="text-subTitle font-bold ">Create an account</div>

          <form
            onSubmit={handleSubmit}
            className="w-4/5 sm:w-3/5 flex flex-col gap-3 mt-8 "
          >
            {/* ---- 1 */}
            <div className="flex flex-col">
              <label className={labelStyle} htmlFor="fullname">
                Full Name
              </label>
              <input
                type="text"
                name="fullname"
                id="fullname"
                placeholder="Full Name"
                className={inputStyle}
                value={formData.fullname}
                onChange={inputChange}
                required
              />
            </div>

            {/* ----- 2 */}
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

            {/* -------- 4 */}
            <div className="flex flex-col">
              <label className={labelStyle} htmlFor="confirmPass">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPass"
                id="confirmPass"
                placeholder="Confirm password"
                className={inputStyle}
                value={formData.confirmPass}
                onChange={inputChange}
                required
              />
              {passwordError && <div>{passwordError}</div>}
            </div>

            {/* ------ btn */}

            <ButtonPrimary
              text="Register"
              style="bg-[#B70569] text-cool-white-100 w-full"
            />
          </form>
          <div>
            <div className="text-[14px] text-[#777] mt-2">
              Already have an account?{" "}
              <Link to="/login" className="text-[#B70569] font-bold ml-1">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------ right */}
      <div className=" hidden sm:flex w-2/5  justify-end ">
        <img
          src={groupImage}
          className="h-[680px] w-[590px]"
          alt="group with phone"
        />
      </div>
    </div>
    </div>
  );
}

export default SignUp;
