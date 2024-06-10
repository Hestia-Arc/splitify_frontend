import React from "react";
import { sectionLayout } from "../../utils/sections";
import { ButtonPrimary } from "../elements/Button";

const AddFriend = () => {
  return (
    <div className={sectionLayout}>
      <form className="space-y-4">
        <div>
          <label className="block after:content-['*'] after:ml-0.5 after:text-red  text-sm font-medium text-slate-700">
            Group Name:
          </label>
          <input
            type="text"
            name="name"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-primary-100 placeholder-slate-400 focus:outline-none focus:border-gray-900 focus:ring-gray-900 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="your name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Group Description:
          </label>
          <textarea
            name="Reason"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-primary-100 h-32  focus:outline-none focus:border-gray-900 focus:ring-gray-900 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Enter Description"
          ></textarea>
        </div>
        <div>
          <label className="block after:content-['*'] after:ml-0.5 after:text-red  text-sm font-medium text-slate-700">
            Group Members:
          </label>
          <select
            name="group"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-primary-100  focus:outline-none focus:border-gray-900 focus:ring-gray-900 block w-full rounded-md sm:text-sm focus:ring-1"
          >
            <option value="">Select Group Members</option>
            <option value="group1">Group 1</option>
            <option value="group2">Group 2</option>
            <option value="group3">Group 3</option>
          </select>
        </div>
        <div className="flex gap-5">
          <select
            name="Currency"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-primary-100  focus:outline-none focus:border-gray-900 focus:ring-gray-900 block w-full rounded-md sm:text-sm focus:ring-1"
          >
            <option value="">Currency</option>
            <option value="USD">United States Dollar (USD)</option>
            <option value="EUR">Euro (EUR)</option>
            <option value="JPY">Japanese Yen (JPY)</option>
            <option value="GBP">British Pound (GBP)</option>
            <option value="AUD">Australian Dollar (AUD)</option>
            <option value="CAD">Canadian Dollar (CAD)</option>
            <option value="CHF">Swiss Franc (CHF)</option>
            <option value="CNY">Chinese Yuan (CNY)</option>
            <option value="SEK">Swedish Krona (SEK)</option>
            <option value="NZD">New Zealand Dollar (NZD)</option>
          </select>
          <select
            name="Category"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-primary-100  focus:outline-none focus:border-gray-900 focus:ring-gray-900 block w-full rounded-md sm:text-sm focus:ring-1"
          >
            <option value="">Select Group Members</option>
            <option value="group1">Category 1</option>
            <option value="group2">Category 2</option>
            <option value="group3">Category 3</option>
          </select>
        </div>
        <ButtonPrimary
          text="Create Group"
          style="bg-primary-100 text-cool-white-100 hover:bg-[#B70569] hover:bg-opacity-90 transition-all duration-300"
        />
      </form>
    </div>
  );
};

export default AddFriend;
