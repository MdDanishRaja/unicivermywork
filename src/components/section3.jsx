import React from "react";

const Section3 = () => {
  return (
    <>
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <h5 className="text-white text-xl mt-6 text-center">CONTACT US - </h5>
        <p className="text-white m-3 text-center">
          Have questions? Reach out to our dedicated support team at
          support@unicever.com
        </p>
        <p className="text-white m-3 text-center">OR, Send us a quick mail</p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-4 m-5">
        <div
          className="flex flex-col space-y-2 w-full md:w-[400px]"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <input
            type="text"
            className="flex-grow h-12 border border-gray-300 px-3 rounded-lg outline-none focus:border-blue-500"
            placeholder="UserName"
          />
          <input
            type="text"
            className="flex-grow h-12 border border-gray-300 px-3 rounded-lg outline-none focus:border-blue-500"
            placeholder="Question Overview"
          />
          <button className="hidden sm:block flex-grow h-12 bg-blue-500 text-white rounded-lg">
            E-Mail
          </button>
        </div>
        <div
          className="flex flex-col space-y-2 w-full md:w-[400px]"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <textarea
            className="flex-grow h-40 border border-gray-300 px-3 py-2 rounded-lg outline-none resize-none focus:border-blue-500"
            placeholder="Write about yourself..."
          ></textarea>
          <button className="block sm:hidden flex-grow h-12 bg-blue-500 text-white rounded-lg mt-2">
            E-Mail
          </button>
        </div>
      </div>
    </>
  );
};

export default Section3;
