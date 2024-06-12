import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "./../context/authContext";
import logo from "../assets/images/split-logo.png";
import groupImage from "../assets/images/authImage.png";
import { ButtonPrimary } from "../components/elements/Button";

const inputStyle =
  "h-9 border text-[16px] bg-transparent px-2 py-1 border-[#B70569] rounded";
const labelStyle = "text-[16px] mb-1";

// ================================================

// ===================================================
function Login() {
  const navigate = useNavigate();
  const { loginHandler } = useAuth();

  //
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  //
  const [showPassword, setShowPassword] = useState(false);
  // eslint-disable-next-line
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorRegex, setErrorRegex] = useState(false);
  const [errorAlert, setErrorAlert] = useState("");

  // const checkFields = email !== "" && password !== "";

  // useEffect(() => {
  //   setErrorRegex("");
  // }, [email, password]);

  const submitHandler = async (e) => {
    e.preventDefault();

    // REGEX TESTS
    const cEmail = EMAIL_REGEX.test(email);
    const cPassword = PWD_REGEX.test(password);

    if (!cPassword || !cEmail) {
      setErrorRegex(true);
      return;
    } else {
      setErrorRegex(false);
    }

    try {
      setLoading(true);

      const response = await loginHandler(email, password);

      // GETTING RESPONSE
      if (!response.ok) {
        setEmail("");
        setPassword("");

        setErrorAlert("An error occur...");

        throw new Error("An error occur...");
      }

      const data = await response.json();

      if (data?.success) {
        setEmail("");
        setPassword("");
        // localStorage.setItem("userID", data.userId);
        // setToken(data.accessToken);

        navigate("/dashboard");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const inputChange = () => {};

  return (
    <div className="h-screen w-full flex bg-cool-white-100 overflow-y-auto  ">
      {/* -------------------------- left */}
      <div className=" h-fit flex-1 bg-[#D977AF] p-1 sm:p-0 ">
        {/* logo */}
        <div className="w-full flex justify-center p-2">
          <img
            src={logo}
            className="h-[100px] w-[100px]"
            alt="group with phone"
          />
        </div>

        {/* form */}
        <div className=" bg-cool-white-100 h-[79%] flex flex-col items-center  rounded-t-[30px] sm:rounded-tl-[80px] sm:rounded-tr-[0px] rou mt-2 py-4 pb-10 sm:py-8  ">
          <div className="text-subTitle font-bold ">Welcome Back!</div>

          <form action="" className="w-4/5 sm:w-3/5 flex flex-col gap-4 mt-8 ">
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
              />
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
              />
            </div>

            {/* ------ btn */}

            <ButtonPrimary
              text="Log In"
              style="bg-[#B70569] text-cool-white-100 w-full"
            />
          </form>
          <div>
            <div className="text-[14px] text-[#777] mt-2">
              Don't have an account? <span className="text-[#B70569] font-bold ml-1">Create Account</span>
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
  );
}

export default Login;
