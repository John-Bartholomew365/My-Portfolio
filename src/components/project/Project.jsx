import Image from "next/image";
import React from "react";

const Project = () => {
  return (
    <div className="px-[100px]">
      <div className="flex items-center justify-between p-6  rounded-md">
        <div>
          <h1 className="font-bold text-[30px] leading-[40px]">
            Got a project? <br />
            Let&apos;s talk!!!
          </h1>
          <p className="w-[350px] py-[20px] opacity-70">
            Ready to bring your project to life? <br /> Let&apos;s discuss how I can
            help you achieve your goals with innovative and effective solutions.
          </p>

          <button className="hover:bg-[#FF0000] mt-7 py-[10px] px-[40px] rounded-[50px] bg-[#FFFFFF] hover:text-black border-[1px] border-[#FF0000] cursor-pointer">
            Contact
          </button>
        </div>
        <div className="">
          <Image
            className="rounded-md"
            src="/mine-code.jpg"
            alt="Profile Image"
            width={480}
            height={380}
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
