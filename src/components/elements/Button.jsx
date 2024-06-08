import React from "react";


export const ButtonNone = ({children}) => {
  return (
    <button className='flex justify bg-gray-600 p-2'>
      {children}
    </button>
  )
}

export const ButtonDark = (props) => {
  return (
    <button className="flex justify-center items-center gap-2 text-primary-800 text-btnSm font-semibold border-solid border-b-[1.5px] border-primary-800">
    <p className="capitalize">{props.text}</p>
    <img src={arrowRightIcon} alt="icon" />
    </button>
  )
}


export const ButtonPrimary = ({text, style}) => {
  return (
    <button className={`h-[48px] w-full ${style}  flex justify-center items-center font-semibold rounded`}>
    <p className="">{text}</p>
    </button>
  )
}


export const ButtonSecondary = ({children}) => {
  return (
    <button className=" h-[50px] w-full rounded-lg flex justify-center items-center gap-2 text-gray-700 text-btnMd font-semibold border-solid border-[1.5px] border-gray-700">
    {children}
    </button>
  )
}



