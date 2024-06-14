import React, { useState } from "react";
import { StateLoader, sectionLayout } from "../../utils/sections";
import { ButtonPrimary } from "../elements/Button";
import { Link, useNavigate } from "react-router-dom";
import arrowRight from "../../assets/images/arrow-right.png";
import { useValidation } from "../../utils/auth";
import { createFriend } from "../../store/actions/friends/createFriend";
import { useDispatch, useSelector } from "react-redux";

const inputStyle =
  "h-9 border text-[16px] bg-transparent px-2 py-1 border-[#B70569] rounded";
const labelStyle = "text-[16px] mb-1";

const AddFriend = () => {
  const loading = useSelector((state) => state?.friends?.loading);
  const userID = localStorage.getItem("splitifyUser");
  const parID = JSON.parse(userID); 
   const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    image: "",
    reason: "",
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
      owner: parID.id,
      name: formData.name,
      email: formData.email,
      image: formData.image,
    };

    // console.log(data);
    dispatch(createFriend({ data, callback: () => navigate("../friends") }));
  };

  return (
    <div className={`${sectionLayout} relative`}>

       {/* ----- loader */}
       {loading && <StateLoader checkStatus={loading} />}


      {/* ---------------------- */}
      <div className="flex items-center gap-2 mb-6">
        <Link to="../friends">
          {" "}
          <img
            src={arrowRight}
            alt="icon"
            className="h-[28px] w-[30px] rotate-180"
          />
        </Link>
        <div className="text-[32px] font-bold">Add Friend</div>
      </div>

      {/* -------- form */}
      <form
        onSubmit={submitHandler}
        className=" w-full sm:w-[60%] flex flex-col gap-4 sm:pl-8"
      >
        {/* ------1  */}
        <div className="flex flex-col">
          <label className={labelStyle} htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your name"
            className={inputStyle}
            value={formData.name}
            onChange={inputChange}
            required
          />
        </div>

        {/* ------- 2 */}
        <div className="flex flex-col">
          <label className={labelStyle} htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your email"
            className={inputStyle}
            value={formData.email}
            onChange={inputChange}
            required
          />
        </div>

        {/* --------------- 3 */}
        <div className="flex flex-col">
          <label className={labelStyle} htmlFor="image">
            Image:
          </label>
          <input
            type="file"
            name="image"
            accept="image/*"
            className={`${inputStyle} h-fit py-2`}
          />
        </div>

        {/* -------------- 4 */}
        <div className="flex flex-col">
          <label className={labelStyle} htmlFor="reason">
            Reason:
          </label>
          <textarea
            name="reason"
            value={formData.reason}
            onChange={inputChange}
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-primary-100 h-32  focus:outline-none focus:border-gray-900 focus:ring-gray-900 block w-full rounded-md sm:text-sm focus:ring-1"
          ></textarea>
        </div>
        <ButtonPrimary
          text="Send Invite"
          style="bg-primary-100 text-cool-white-100 hover:bg-[#B70569] hover:bg-opacity-90 transition-all duration-300"
        />
      </form>
    </div>
  );
};

export default AddFriend;
