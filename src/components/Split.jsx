import React from 'react'

const Split = () => {
  return (
    <div><section className="w-full bg-cool-white-100 py-20">
    <div className="flex items-center gap-5   w-[90%] m-auto justify-between">
      <div className="flex items-center flex-col  text-center">
        <h2 className="text-lg font-bold tracking-tighter">
          Split Bills Easily{" "}
        </h2>
        <p className="text-sm">
          Add friends and split bills in just a few taps
        </p>
      </div>
      <img
        src="src/assets/images/image 2.png"
        alt=""
        className="object-contain  w-[60%]"
      />
    </div>
  </section></div>
  )
}

export default Split