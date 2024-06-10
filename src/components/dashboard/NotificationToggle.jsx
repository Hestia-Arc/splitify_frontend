import React, { useState } from "react";

const NotificationToggle = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const handleToggle = () => {
    setIsEnabled(!isEnabled);
  };

  return (
    <button
      onClick={handleToggle}
      className={`w-16 h-8 rounded-full relative focus:outline-none ${
        isEnabled ? "bg-primary-100" : "bg-primary-50"
      }`}
    >
      <div
        className={`w-6 h-6 bg-primary-100 rounded-full absolute top-1 transition-transform duration-300 ${
          isEnabled ? "transform translate-x-full  bg-primary-50" : "left-1"
        }`}
      ></div>
    </button>
  );
};
export default NotificationToggle;
