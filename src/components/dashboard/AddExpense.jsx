import React, { useEffect, useState } from "react";
import { StateLoader, sectionLayout } from "../../utils/sections";
import { ButtonPrimary } from "../elements/Button";
import { Link, useNavigate } from "react-router-dom";
import arrowRight from "../../assets/images/arrow-right.png";
import { useValidation } from "../../utils/auth";
import { useDispatch, useSelector } from "react-redux";
import { createExpense } from "../../store/actions/expenses/createExpense";
import { getAllFriend } from "../../store/actions/friends/getAllFriend";
import { toast } from "react-toastify";

const inputStyle =
  "h-9 border text-[16px] bg-transparent px-2 py-1 border-[#B70569] rounded";
const labelStyle = "text-[16px] mb-1";

const AddExpense = () => {
  const { friends } = useSelector((state) => state?.friends);
  const loading = useSelector((state) => state?.expenses?.loading);
  const userID = localStorage.getItem("splitifyUser");
  const parID = JSON.parse(userID);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [friendList, setFriendList] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    amount: "",
  });

  // console.log(friendList);
  // console.log(`state--->${friends}`);

  useEffect(() => {
    dispatch(getAllFriend(parID.id));
  }, []);

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

    if (friendList.length === 0) {
      toast.error("Please add a friend before creating an expense");
      return;
    }

    let amtPerMember = formData?.amount / (friendList.length + 1);

    let shareToMembers = friendList.map((item) => ({
      name: item,
      share: amtPerMember,
    }));
    // console.log(amtPerMember)
    // console.log(shareToMembers)
    // console.log(fr)

    // ----------------------

    //   if(friendList.length === 0 ){
    //     toast.error("Please add a friend before creating an expense")
    //   } else{

    //     // --------------------------
      let data = {
        owner: parID.id,
        title: formData.name,
        description: "My new expense",
        date: "",
        amount: formData.amount,
        currency: "",
        category: formData.category || "Others",
        members: shareToMembers,
        expenseType: "",
      };

      // console.log(data);
      dispatch(createExpense({ data, callback: () => navigate("../expenses") }));
    // }
  };

  return (
    <div className={`${sectionLayout} relative`}>
      {/* ----- loader */}
      {loading && <StateLoader checkStatus={loading} />}

      {/* --------------- */}
      <div className="flex items-center gap-2 mb-6">
        <Link
          to="../expenses"
          className="w-[40px] h-[40px] shadow-md p-1 flex justify-center items-center border hover:scale-125 transition-all duration-300"
        >
          {" "}
          <img
            src={arrowRight}
            alt="icon"
            className="h-[28px] w-[30px] rotate-180"
          />
        </Link>
        <div className="text-[32px] font-bold">Create Expense</div>
      </div>

      {/* -------- form */}
      <form
        onSubmit={submitHandler}
        className=" w-full sm:w-[60%] flex flex-col gap-4"
      >
        {/* ------1  */}
        <div className="flex flex-col">
          <label className={labelStyle} htmlFor="name">
            Bill Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your bill name"
            className={inputStyle}
            value={formData.name}
            onChange={inputChange}
            required
          />
        </div>

        {/* ------- 2 */}
        <div className="flex flex-col">
          <label className={labelStyle} htmlFor="cates">
            Category
          </label>
          <select
            name="category"
            id="cates"
            className={inputStyle}
            value={formData.category}
            onChange={inputChange}
            required
            // className="mt-1 px-3 py-2 bg-white border shadow-sm border-primary-100  focus:outline-none focus:border-gray-900 focus:ring-gray-900 block w-full rounded-md sm:text-sm focus:ring-1"
          >
            <option>Select a category</option>

            <option value="Events">Events</option>
            <option value="Tours">Tours</option>
            <option value="Shopping">Shopping</option>
            <option value="Party">Party</option>
            <option value="Picnics">Picnics</option>
            <option value="Education">Education</option>
            <option value="Rent">Rent</option>
            <option value="Dinner">Dinner</option>
            <option value="Transport">Transport</option>
            <option value="Others">Others</option>
          </select>
        </div>

        {/* ------- 3 */}
        <div className="flex flex-col">
          <label className={labelStyle} htmlFor="amount">
            Amount
          </label>
          <input
            type="number"
            name="amount"
            id="amount"
            placeholder="Enter amount"
            className={inputStyle}
            value={formData.amount}
            onChange={inputChange}
            required
          />
        </div>

        {/* --------------- choose friends */}
        <select
          required
          name="members"
          id="members"
          className={`${inputStyle} w-[200px]`}
          // value={formData.category}
          onChange={(event) => {
            // Destructure the target value and handle empty values
            const { value } = event.target;
            if (!value) return; // Prevent unnecessary updates if the input is empty

            // Update the friendList state using the spread operator
            // setFriendList((prevState) => ({ ...prevState, friendList: value }));
            setFriendList((prevState) => [...prevState, value]);
          }}
        >
          <option>Select a friend</option>

          {friends?.map((item, i) => {
            return (
              <option key={i} value={item.name}>
                {item.name}
              </option>
            );
          })}
        </select>

        {/* -----show friends */}
        <div className="h-[100px] flex items-center gap-3 px-2 border overflow-x-auto">
          {friendList?.map((item, index) => {
            return (
              <div className="text-center">
                <div
                  key={index}
                  className="h-[60px] w-[60px] flex justify-center items-center rounded-full bg-slate-400"
                >
                  {item?.slice(0, 1)}{" "}
                </div>
                <div className="text-[12px]">{item}</div>
              </div>
            );
          })}
        </div>

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
