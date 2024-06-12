import React from "react";
import { sectionLayout } from "../../utils/sections";
import { ButtonPrimary } from "../elements/Button";
import { Link } from "react-router-dom";

const inputStyle =
  "h-9 border text-[16px] bg-transparent px-2 py-1 border-[#B70569] rounded";
const labelStyle = "text-[16px] mb-1";

const AddExpense = () => {
  return (
    <div className={sectionLayout}>
      <div className="flex gap-2 mb-6">
        <Link to="../expenses">--</Link>
        <div className="text-[32px]">Create Expense</div>
      </div>

      {/* -------- form */}
      <form className="w-[60%] flex flex-col gap-4">
        {/* ------1  */}
        <div className="flex flex-col">
          <label className={labelStyle} htmlFor="email">
            Bill Name
          </label>
          <input
            type="text"
            name="name"
            id="email"
            placeholder="Enter your bill name"
            className={inputStyle}
            // value={formData.email}
            // onChange={inputChange}
          />
        </div>

        {/* ------- 2 */}
        <div className="flex flex-col">
          <label className={labelStyle} htmlFor="email">
            Category
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

        {/* ------- 3 */}
        <div className="flex flex-col">
          <label className={labelStyle} htmlFor="email">
            Amount
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter amount"
            className={inputStyle}
            // value={formData.email}
            // onChange={inputChange}
          />
        </div>

        {/* --------------- choose friends */}
        <div className="h-[100px] bg-slate-500"></div>

        {/* ------------------- button */}
        <ButtonPrimary
          text="Save"
          style="bg-primary-100 text-cool-white-100 hover:bg-[#B70569] hover:bg-opacity-90 transition-all duration-300"
        />
      </form>

      {/* <select
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
          </select> */}
    </div>
  );
};

export default AddExpense;
