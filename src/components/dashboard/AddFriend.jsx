import React from "react";
import { sectionLayout } from "../../utils/sections";
import { ButtonPrimary } from "../elements/Button";
import { Link } from "react-router-dom";

const inputStyle =
  "h-9 border text-[16px] bg-transparent px-2 py-1 border-[#B70569] rounded";
const labelStyle = "text-[16px] mb-1";

const AddFriend = () => {
  return (
    <div className={sectionLayout}>
      <div className="flex gap-2 mb-6">
        <Link to="../friends">--</Link>
        <div className="text-[32px] font-bold">Add Friend</div>
      </div>

      {/* -------- form */}
      <form className=" w-full sm:w-[60%] flex flex-col gap-4">
        {/* ------1  */}
        <div className="flex flex-col">
          <label className={labelStyle} htmlFor="email">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="email"
            placeholder="Your name"
            className={inputStyle}
            // value={formData.email}
            // onChange={inputChange}
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
            // value={formData.email}
            // onChange={inputChange}
          />
        </div>

        {/* --------------- 3 */}
        <div className="flex flex-col">
          <label className={labelStyle} htmlFor="email">
            Image:
          </label>
          <input
            type="file"
            name="image"
            accept="image/*"
            required
            className={inputStyle}
          />
        </div>

        {/* -------------- 4 */}
        <div className="flex flex-col">
          <label className={labelStyle} htmlFor="email">
            Reason:
          </label>
          <textarea
            name="Reason"
            required
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
