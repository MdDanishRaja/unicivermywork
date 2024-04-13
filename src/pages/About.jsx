import React from "react";


const About = () => {
  return (
    <div>
      <p className="text-3xl text-red-50 text-center mb-5">About our Website - </p>
      <div className="flex flex-wrap gap-6 mb-5 mx-2">
        <div className="flex h-[260px] w-[600px] items-center m-auto p-2 bg-gradient-to-br from-blue-900 (deep blue) to to-gray-900 rounded-lg sm:h-64 sm:w-full md:w-1/2 lg:w-[75%] lg:p-8"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
          <p className="text-white">
            Welcome to Unicever.com, your trusted platform for
            efficient and reliable certificate verification services. We
            understand the importance of authenticity and credibility when it
            comes to certificates, and our mission is to provide a seamless and
            secure solution for verifying the legitimacy of academic,
            professional, and other types of certificates.
          </p>
        </div>
        <div className="flex h-[265px] w-[600px] items-center m-auto p-2 bg-gradient-to-br from-teal-900 (deep teal) to to-purple-900 rounded-lg sm:h-64 sm:w-full md:w-1/2 lg:w-[75%] lg:p-8"
        data-aos="flip-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
          <p className="text-white">
            At Unicever.com, we believe that everyone deserves peace of
            mind when relying on certificates for various purposes, whether it's
            for employment, education, or personal records. With the increasing
            prevalence of counterfeit certificates and fraudulent claims, we
            recognized the need for a robust verification system that is easily
            accessible to individuals, employers, educational institutions, and
            other organizations.
          </p>
        </div>
        <div className="flex h-[230px] w-[600px] items-center m-auto p-2 bg-gradient-to-br from-yellow-800 (dark yellow) to to-red-900 rounded-lg sm:h-64 sm:w-full md:w-1/2 lg:w-[75%] lg:p-8"
        data-aos="flip-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
          <p className="text-white">
            Our platform offers a user-friendly interface designed to simplify
            the verification process. Users can quickly and conveniently
            authenticate certificates by entering the unique verification code
            or other relevant details provided on the document. Our advanced
            algorithms then cross-reference the information against our
            extensive database to confirm its validity.
          </p>
        </div>
        <div className="flex h-[200px] w-[600px] items-center m-auto p-2 bg-gradient-to-br from-indigo-800 (dark indigo) to to-purple-900 rounded-lg sm:h-64 sm:w-full md:w-1/2 lg:w-[75%] lg:p-8"
        data-aos="flip-down"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
          <p className="text-white">
            We are committed to maintaining the highest standards of security
            and confidentiality to protect the integrity of the verification
            process. Our stringent protocols ensure that sensitive information
            remains encrypted and inaccessible to unauthorized parties.
          </p>
        </div>
        <div className="flex h-[200px] w-[600px] items-center m-auto p-2 bg-gradient-to-br from-purple-800 (dark purple) to to-pink-900 rounded-lg sm:h-64 sm:w-full md:w-1/2 lg:w-[75%] lg:p-8"
        data-aos="flip-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
          <p className="text-white">
            Unicever.com is dedicated to promoting transparency and
            trust in a wide range of industries and sectors. Whether you are a
            job seeker, an employer, a recruiter, or an educational institution,
            you can rely on us to verify certificates accurately and
            efficiently.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
