import React from "react";

const Footer = () => {
  return (
    <footer className="text-sm  text-white">
      <div className="mt-8 w-full bg-black px-6 py-8 md:px-[200px] flex flex-col md:flex-row justify-between md:text-base space-y-5 md:space-y-0">
        {/* dibagi menjadi 3 column */}
        <div className="flex flex-col">
          <img
            src="./white-logo.png"
            alt="logo-white"
            width={"90px"}
            height={"90px"}
            className="mb-2"
          />
          <p>Jln. Tersesat Bersama No.19</p>
          <p>+62 8553 3361 2211</p>
        </div>

        <div className="flex flex-col">
          <h1 className="text-h1">Forum</h1>
          <p>Support</p>
          <p>Recent Posts</p>
          <p>Most Viewed</p>
          <p>Readers Choice</p>
        </div>

        <div className="flex flex-col">
          <h1 className="text-h1">Privacy Policy</h1>
          <p>About us</p>
          <p>Terms & Conditions</p>
          <p>Terms of Services</p>
        </div>
      </div>
      <div className="bg-black">
        <p className="text-center border-white border-t-[1px] py-4 px-6">
          All rights reserved @M19Y 2023
        </p>
      </div>
    </footer>
  );
};

export default Footer;
