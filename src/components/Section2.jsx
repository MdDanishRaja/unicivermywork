import React from "react";
const Section2 = () => {
  return (
    <>
      <h1 className=" text-cyan-500 font-bold text-2xl m-10 mb-8 lg:p-10">
        Why Choose Us ?
      </h1>
      <div className="flex flex-wrap gap-4 justify-around items-center">
        <div
          className="bg-gradient-to-r from-orange-400 to-pink-500 h-[220px] w-[340px] rounded-xl "
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <h5 className="text-2xl p-3 text-green-300">
            Secure Certificate Verification
          </h5>
          <p className="p-5 text-cyan-200">
            Ensure the validity of certicates through our advanced verification
            process. safegourding against fraud and mis representation.
          </p>
        </div>
        <div
          className="bg-gradient-to-r from-cyan-400 to-green-500 h-[220px] w-[340px] rounded-xl"
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <h5 className="text-2xl p-3 text-purple-600">
            Effortless Distribution
          </h5>
          <p className="p-5 text-cyan-50">
            Organization can easily distribute certificates online, streamlining
            the entire cretification process.
          </p>
        </div>
        <div
          className="bg-gradient-to-r from-teal-400 to-blue-500 h-[220px] w-[340px] rounded-xl"
          data-aos="flip-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <h5 className="text-2xl p-3 text-red-700">Real-time Tracking</h5>
          <p className="p-5 text-cyan-50">
            Track verification status in real-time, providing instant updates
            and peace of mind.
          </p>
        </div>
      </div>

      <h1 className=" text-green-300 font-bold text-2xl m-10 mb-8 lg:p-10">
        Testinomials -
      </h1>
      <div className="flex flex-wrap gap-4 justify-around items-center">
        <div
          className="bg-gradient-to-r from-purple-400 to-blue-600 h-[220px] w-[340px] rounded-xl"
          data-aos="flip-down"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <h5 className="p-10  text-cyan-100">
            I never knew certificate verification could be this simple and
            reliable, Highly recommended!
          </h5>
          <p className="p-5 text-2xl text-red-300">-Jane Doe, HR Manager</p>
        </div>
        <div
          className="bg-gradient-to-r from-sky-500 to-red-500 h-[220px] w-[340px] rounded-xl"
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <h5 className=" p-10  text-cyan-100 ">
            This platform has saved us countless hours of manual verification
            for sure.
          </h5>
          <p className="p-5 text-2xl text-black-500">
            -john Smith, School Administrator
          </p>
        </div>
      </div>
    </>
  );
};

export default Section2;
