import React from "react";
import { sectionLayout } from "../../utils/sections";
import { ButtonPrimary } from "../elements/Button";

const AddFriend = () => {
  return (
    <div className={sectionLayout}>
      <form className="space-y-4">
        <div>
          <label className="block after:content-['*'] after:ml-0.5 after:text-red  text-sm font-medium text-slate-700">
            Name:
          </label>
          <input
            type="text"
            name="name"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-primary-100 placeholder-slate-400 focus:outline-none focus:border-gray-900 focus:ring-gray-900 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="your name"
          />
        </div>
        <div>
          <label className="after:content-['*'] after:ml-0.5 after:text-red text-sm font-medium text-slate-700">
            Email:
          </label>
          <input
            type="email"
            name="email"
            required
             className="mt-1 px-3 py-2 bg-white border shadow-sm border-primary-100 placeholder-slate-400 focus:outline-none focus:border-gray-900 focus:ring-gray-900 block w-full rounded-md sm:text-sm focus:ring-1"
             placeholder="your email address"
          />
        </div>
        <div>
          <label className="after:content-['*'] after:ml-0.5 after:text-red  text-sm font-medium text-slate-700">
            Image:
          </label>
          <input
            type="file"
            name="image"
            accept="image/*"
            required
           className="mt-1 px-3 py-2 bg-white border shadow-sm border-primary-100  focus:outline-none focus:border-gray-900 focus:ring-gray-900 block w-full rounded-md sm:text-sm focus:ring-1"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
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
