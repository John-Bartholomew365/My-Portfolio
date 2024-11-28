import React from "react";
import { FaProjectDiagram } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const Process = () => {
  return (
    <div className="px-[100px] pr-[20px] flex flex-col items-center justify-center">
      <div className="py-[30px]">
        <p className="text-[#FF0000] font-bold text-center text-[12px]">
          PROCESS
        </p>    
        <h1 className="font-bold py-[15px] text-[24px] text-center">
          MY WORKING PROCESS
        </h1>
      </div>
      <div className="flex gap-[30px]">
        <div className="flex items-center gap-[30px]">
          <div>
            <FaProjectDiagram size={50} color="black" />
            <h1 className="text-[20px] font-bold py-[15px]">
              Discovery and Planning
            </h1>
            <p className="opacity-70 text-[14px] w-[290px] mb-3">
              I begin by understanding your goals, target audience, and project
              requirements. This phase includes research, brainstorming, and
              creating a detailed project roadmap.
            </p>
          </div>
          <div>
            <FaArrowRight size={50} color="black" />
          </div>
        </div>
        <div className="flex items-center gap-[40px]">
          <div>
            <FaCode size={50} color="black" />
            <h1 className="text-[20px] font-bold py-[15px]">
              Design and Development
            </h1>
            <p className="opacity-70 text-[14px] w-[290px] mb-3">
              I create wireframes and mockups to visualize the project, followed
              by coding to bring the designs to life. I ensure responsiveness
              and seamless integration of APIs throughout the development
              process.
            </p>
          </div>
          <div>
            <FaArrowRight size={50} color="black" />
          </div>
        </div>
        <div>
          <FaStar size={50} color="black" />
          <h1 className="text-[20px] font-bold py-[15px]">Review and Launch</h1>
          <p className="opacity-70 text-[14px] w-[290px] mb-3">
            I present the project for your feedback, make necessary adjustments,
            and prepare for deployment. Once approved, I launch the project and
            provide ongoing support to ensure everything runs smoothly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Process;
