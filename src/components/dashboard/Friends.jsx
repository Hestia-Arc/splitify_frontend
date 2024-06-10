// import React from "react";
// import { sectionLayout } from "../../utils/sections";
// import { FaPlus } from "react-icons/fa6";
// import { Link } from "react-router-dom";

// const Friends = () => {
//   const friendArray = [
//     { img: "", name: "Rohimat" },
//     { img: "", name: "ife" },
//     { img: "", name: "john" },
//     { img: "", name: "jamiu" },
//   ];
//   return (
//     <div className={sectionLayout}>
//       <div className="flex flex-row-reverse items-start">
//         <Link to="addfriend">
//           <button
//             type="button"
//             className=" text-cool-white-100 bg-primary-100 border py-3 px-5 sm:p-1 flex  items-center  gap-1 rounded-md "
//           >
//             <FaPlus /> Add Friend
//           </button>
//         </Link>
//         <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-10 mt-20 text-[40px]">
//           {friendArray.map((friend, index) => (
//             <div
//               key={index}
//               className="flex flex-col items-center justify-center"
//             >
//               <div className="h-[150px] w-[150px] rounded-full bg-gray-500 border-none">
//                 {friend.img}
//               </div>
//               <p className="text-center">{friend.name}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Friends;
import React, { useState, useEffect } from "react";
import { sectionLayout } from "../../utils/sections";
import { FaPlus, } from "react-icons/fa6";
import { MdGroupAdd } from "react-icons/md";

import { Link } from "react-router-dom";

const Friends = () => {
  const [friendArray, setFriendArray] = useState([
    // { img: "", name: "Rohimat" },
    // { img: "", name: "Ife" },
    // { img: "", name: "John" },
    // { img: "", name: "Jamiu" },
  ]);

  const [initialFriends, setInitialFriends] = useState(true);

  useEffect(() => {
    if (friendArray.length > 0) {
      setInitialFriends(false);
    }
  }, [friendArray.length]);

  return (
    <div className={sectionLayout}>
      {initialFriends ? (
        <div className="flex flex-col items-center  gap-3">
          <p className="font-bold text-center">
            You have no friends added. Add friends to start sharing bills.
          </p>
          <div>
            <Link
              to="addfriend"
              className="flex items-center gap-1 text-primary-100"
            >
              <MdGroupAdd className="text-2xl" />
              <p>Add Friend</p>
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex flex-row-reverse items-start">
          <Link to="addfriend">
            <button
              type="button"
              className="text-cool-white-100 bg-primary-100 border py-3 px-5 sm:p-1 flex items-center gap-1 rounded-md"
            >
              <FaPlus /> Add Friend
            </button>
          </Link>
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-10 mt-20 text-[40px]">
            {friendArray.map((friend, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center"
              >
                <div className="h-[150px] w-[150px] rounded-full bg-gray-500 border-none">
                  {friend.img}
                </div>
                <p className="text-center">{friend.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Friends;
