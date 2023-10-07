import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Slide } from "react-awesome-reveal";
import BlenSpark from "/home/dev/Documents/React/Blenspark/src/assets/pngs/logo.png";

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_xlot6wo",
        "template_h54ppjp",
        form.current,
        "nrXpLGRc5MRf3JpR-"
      )
      .then(
        (result) => {
          alert("message sent successfully...");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const scrollUp = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      id="footer"
      className="bg-zinc-800 w-full px-3 flex flex-col md:flex-row"
    >
      {/* Left Section */}
      <div className="py-6 w-full md:w-1/2">
        <div className="bg-white p-8 flex flex-col">
          <span className="-mt-4 mb-4 flex flex-col">
            <span className="text-amber-600 text-4xl font-extrabold">
              Contact Us
            </span>
            <span className="text-gray-500">
              We would love to talk about how we can help you
            </span>
          </span>
          {/* Form */}
          <form className="mt-4" ref={form} onSubmit={sendEmail}>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <input
                  required
                  type="text"
                  placeholder="Name"
                  name="user_name"
                  className="py-3 px-4 bg-gray-200 block w-full border-gray-200 rounded-md text-sm text-black focus:outline-none focus:border-ring-amber-600 focus:ring-2 focus:ring-amber-600"
                />
                <input
                  required
                  type="email"
                  placeholder="Email address"
                  name="user_email"
                  className="invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 py-3 px-4 bg-gray-200 block w-full border-gray-200 rounded-md text-sm text-black focus:outline-none  focus:border-ring-amber-600 focus:ring-2 focus:ring-amber-600 "
                />
              </div>
              <textarea
                required
                name="message"
                type="text"
                rows={10}
                placeholder="Message"
                className="py-3 px-4  bg-gray-200 block w-full border-gray-200 rounded-md text-sm  text-black focus:outline-none focus:border-ring-amber-600 focus:ring-2 focus:ring-amber-600"
              ></textarea>
            </div>

            <button
              type="submit"
              value="Submit"
              id="input-submit"
              class="bg-[#01be96] w-full hover:bg-[#2c967f] text-white font-bold py-2 px-4 rounded-md mt-4 "
            >
              <div className="flex justify-center">
                <span className="fill-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z" />
                  </svg>
                </span>
                <span className="ml-2">Send</span>
              </div>
            </button>
          </form>
        </div>
      </div>

      {/* Right Section */}
      <Slide direction="down" className="w-full md:w-1/2">
        <div className="bg-[#01be96] flex flex-col items-center p-4 h-full">
          <div className="text-6xl font-bold p-2">Let'sTalk</div>
          <div className="flex flex-col items-start">
          <div className="flex mt-4">
          <span className="fill-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" />
                </svg>
              </span>
              <span className="ml-2">infor@blenspark.com</span>
          </div>
          <div className="flex mt-4">
          <span className="fill-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 2c0-1.104-.896-2-2-2h-10c-1.104 0-2 .896-2 2v20c0 1.104.896 2 2 2h10c1.104 0 2-.896 2-2v-20zm-8.5 0h3c.276 0 .5.224.5.5s-.224.5-.5.5h-3c-.276 0-.5-.224-.5-.5s.224-.5.5-.5zm1.5 20c-.553 0-1-.448-1-1s.447-1 1-1c.552 0 .999.448.999 1s-.447 1-.999 1zm5-3h-10v-14.024h10v14.024z" />
                </svg>
              </span>
              <span className="ml-2">+923134856122</span>
          </div>
          <div className="flex mt-4">
          <span className="fill-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
                </svg>
              </span>
              <span className="ml-2">
                BlenSpark, Hamza Park St, Thoker Niaz Baig, Lahore, Punjab
              </span>
          </div>
          </div>
          
        </div>
      </Slide>
    </div>
  );
};

export default Footer;
