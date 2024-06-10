import React from "react";
import Select from "react-select";
import emojiFlags from "emoji-flags";

import { sectionLayout } from "../../utils/sections";
import NotificationToggle from "./NotificationToggle";
import ThemeToggle from "./ThemeToggle";

const Setting = () => {
  const languageOptions = [
    { value: "en", label: `English ${emojiFlags.countryCode("GB").emoji}` },
    { value: "es", label: `Español ${emojiFlags.countryCode("ES").emoji}` },
    { value: "fr", label: `Français ${emojiFlags.countryCode("FR").emoji}` },
  ];

  return (
    <div className={sectionLayout}>
      <div className="flex border p-10 flex-col">
        <div className="flex justify-between w-full items-center ">
          <h1 className="bold text-black text-3xl font-bold font-poppins">
            Davina J.
          </h1>
          <div className="flex gap-5">
            <button
              type="button"
              className="bg-primary-100 text-cool-white-100 py-3 px-5 sm:p-1 rounded-md"
            >
              Upload Photo
            </button>
            <button
              type="button"
              className="text-primary-100 bg-cool-white-100 border-primary-100 border py-3 px-5 sm:p-1 rounded-md"
            >
              Delete
            </button>
          </div>
        </div>
        <form className="space-y-4">
          <div className="flex gap-5  ">
            <div>
              <label className="block after:content-['*'] after:ml-0.5 after:text-red  text-sm font-medium text-slate-700 ">
                First Name:
              </label>
              <input
                type="text"
                name="First Name"
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-primary-100 placeholder-slate-400 focus:outline-none focus:border-gray-900 focus:ring-gray-900 block  rounded-md sm:text-sm focus:ring-1"
              />
            </div>
            <div>
              <label className="block after:content-['*'] after:ml-0.5 after:text-red  text-sm font-medium text-slate-700">
                Last Name:
              </label>
              <input
                type="text"
                name="Last Name"
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-primary-100 placeholder-slate-400 focus:outline-none focus:border-gray-900 focus:ring-gray-900 block rounded-md sm:text-sm focus:ring-1"
              />
            </div>
          </div>
          <div>
            <label className="block after:content-['*'] after:ml-0.5 after:text-red  text-sm font-medium text-slate-700">
              Address:
            </label>
            <input
              type="text"
              name="Address"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-primary-100 placeholder-slate-400 focus:outline-none focus:border-gray-900 focus:ring-gray-900 block rounded-md sm:text-sm focus:ring-1"
            />
          </div>
        </form>
      </div>
      <div className="flex border p-10 flex-col">
        <h1 className="text-xl font-bold">General Preferences</h1>
        <div className="flex w-full justify-between items-center">
          <div>
            <p className="text-lg font-semibold text-gray-900">
              Email Notifications
            </p>
            <p className=" text-slate-500">
              You will receive email notifications on messages and events
            </p>
          </div>
          <NotificationToggle />
        </div>
        <div className="flex w-full justify-between items-center">
          <div>
            <p className="text-lg font-semibold text-gray-900">
              In-App Notifications
            </p>
            <p className=" text-slate-500">
              You will receive email notifications on messages and events
            </p>
          </div>
          <NotificationToggle />
        </div>
        <div className="flex w-full justify-between items-center">
          <div>
            <p className="text-lg font-semibold text-gray-900">Language </p>
            <p className=" text-slate-500">Select Language</p>
          </div>
          <div className="flex">
            <Select options={languageOptions} />
          </div>
        </div>
        <div className="flex w-full justify-between items-center mt-5">
          <div>
            <p className="text-lg font-semibold text-gray-900">Dark Mode</p>
            <p className="text-slate-500">
              Enable or disable dark mode for the application
            </p>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Setting;
