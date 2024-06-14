// import ClipLoader from "react-spinners/ClipLoader";
// import HashLoader from "react-spinners/HashLoader";
import { useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";

export const sectionLayout = "min-h-40 mx-4 my-10 sm:m-8  ";

// --------------- for landing page
export const landingStyle =
  "min-h-[500px] sm:h-[570px] w-full flex flex-col gap-10 sm:gap-0 sm:flex-row items-center py-14 sm:py-7 px-3 sm:px-10 lg:px-16";
export const shadowImage = "border border-gray-200 rounded-3xl shadow-xl ";

// ----------- loader
export const StateLoader = (checkStatus) => {
  let [color, setColor] = useState("#B70569");

  return (
    <div className="h-[120px] w-full flex justify-center items-center gap-4 bg-gray-800 bg-opacity-80 absolute top-0 left-0 right-0">
      <div className="text-[#fff] text-[16px] sm:text-[28px]">Loading, please wait...</div>
      <BeatLoader
        color={color}
        loading={checkStatus}
        // cssOverride={override}
        size={45}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};
