import React from "react";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";

function Footer() {
  return (
    <div id="contact" className="bg-zinc-900">
      <div className="flex flex-col items-center justify-center rounded-t-3xl bg-zinc-800 rounded-3xl  w-full px-10 py-5">
        <div className="flex w-[90vw] flex-wrap justify-center items-center py-10 gap-4">
          <div className="italic lg:w-[25vw] md:w-[45vw] sm:w-[45vw] ">
            It's not how much we give, but how much love we put into giving.
          </div>
          <div className=" lg:w-[25vw] md:w-[45vw] sm:w-[45vw]">
            <div className="text-bold mb-2">Donate Now</div>
            <div className="italic opacity-80">
              <div className="flex flex-row items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#7a180f]"></div>
                <div className="">Bkash +8801922089266 </div>
              </div>

              <div className="flex flex-row items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#7a180f]"></div>
                <div className="">Nagad +8801922089266 </div>
              </div>
            </div>
          </div>
          <div className=" lg:w-[25vw] md:w-[45vw] sm:w-[45vw]">
            <div className="text-bold mb-2">Contact Us</div>
            <div className="italic opacity-80">
              <div className="flex flex-row items-center gap-2">
                <div className="w-3 h-3 rounded-full flex flex-row items-center  ">
                  <IoCall className="" />
                </div>

                <div className="">+880 1303-923975 </div>
              </div>

              <div className="flex flex-row items-center gap-2">
                <div className="w-3 h-3 rounded-full flex flex-row items-center  ">
                  <IoMdMail className="" />
                </div>
                <div className="">nextinitiative1@gmail.com </div>
              </div>
            </div>
          </div>
        </div>

        <hr color="#ffffff" className="w-[80vw] opacity-30"></hr>
        <div className="items-center justify-center flex w-full px-10 pt-5 ">
          <h1 className='text-l font-["Neue_Montreal"] font-bold tracking-tight'>
            Designed and Developed by Arnab Dev{" "}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;
