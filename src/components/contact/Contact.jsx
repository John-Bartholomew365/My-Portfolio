"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowCircleRight } from "react-icons/fa";

const Hero = () => {
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [isAppearing, setIsAppearing] = useState(true);

  const nameParts = ["Designing", "Solutions", "Not", "Just", "Visuals"];
  const currentWord = nameParts.join("");
  const isNameComplete = isAppearing
    ? currentLetterIndex >= currentWord.length
    : currentLetterIndex < 0;

  useEffect(() => {
    if (isNameComplete) {
      const delay = isAppearing ? 2000 : 500;
      const nameTimeout = setTimeout(() => {
        setIsAppearing(!isAppearing);
        setCurrentLetterIndex(isAppearing ? currentWord.length - 1 : 0);
      }, delay);

      return () => clearTimeout(nameTimeout);
    } else {
      const letterTimeout = setTimeout(() => {
        setCurrentLetterIndex((prev) => (isAppearing ? prev + 1 : prev - 1));
      }, 200); // Speed of each letter appearing/disappearing

      return () => clearTimeout(letterTimeout);
    }
  }, [currentLetterIndex, isNameComplete, isAppearing, currentWord.length]);

  return (
    <div className="py-[100px] px-[100px]">
      <div className="flex items-center p-4 justify-around rounded-md  bg-gray-100">
        {/* <div className="bg-transparent p-[2px] rounded-[100%]">
          <Image
            className="rounded-full"
            src="/snap.jpg"
            alt="Profile Image"
            width={250}
            height={650}
          />
        </div> */}
        <div className="flex items-center gap-[100px]">
          <div>
            <h1 className="text-[26px] w-[300px] leading-[36px]">
              <span className="font-bold">
                {nameParts.map((part, partIndex) => (
                  <span key={partIndex} className="inline-block">
                    {Array.from(part).map((letter, index) => (
                      <span
                        key={index}
                        className={`inline-block transition-all duration-500 ${
                          isAppearing
                            ? index < currentLetterIndex
                              ? "opacity-100 translate-x-0"
                              : "opacity-0 translate-x-4"
                            : index >= currentLetterIndex
                            ? "opacity-0 translate-x-4"
                            : "opacity-100 translate-x-0"
                        }`}
                      >
                        {letter}
                      </span>
                    ))}
                    {partIndex < nameParts.length - 1 && <span>&nbsp;</span>}
                  </span>
                ))}
              </span>
            </h1>
            <p className="w-[400px]  py-[20px] opacity-70">
              I focus on creating designs that are both beautiful and
              functional. By understanding user needs and business goals, I
              ensure that every project is user-friendly, intuitive, and
              effectively solves problems.
            </p>
          </div>
          <div>
            <div className="bg-white p-3 my-[20px] rounded-md">
              <div className="flex gap-3 items-center">
                <FaArrowCircleRight size={22} color="grey" />
                <h1 className="font-bold">200+ Completed Projects</h1>
              </div>

              <p className="w-[350px] text-[14px] py-[10px] opacity-70">
                With over 200 projects completed, I bring extensive experience
                and a proven track record of delivering high-quality,
                user-focused solutions.
              </p>
            </div>
            <div className="bg-[#FF0000] text-white p-3 my-[20px] rounded-md">
              <div className="flex gap-3 items-center">
                <FaArrowCircleRight size={22} color="grey" />
                <h1 className="font-bold">2+ Years of Experience</h1>
              </div>

              <p className="w-[350px] text-[14px] py-[10px] opacity-70">
                With over two years of experience, I have honed my skills in
                frontend development, delivering effective and user-friendly
                solutions across various projects.
              </p>
         
            </div>
            <div className="hover:bg-[#FF0000] text-center w-[200px] mt-10 py-[10px] px-[40px] rounded-[50px] bg-[#FFFFFF] hover:text-black border-[1px] border-[#FF0000] cursor-pointer">
              <button>See full profile</button>
            </div>
          </div>

          <div className="flex flex-row gap-[20px]">
            {/* <div className="hover:bg-[#FFFFFF] hover:border-[1px] hover:border-[#FF0000] py-[10px] px-[40px] rounded-[50px] bg-[#FF0000] hover:text-black border-[1px] border cursor-pointer">
              <button className="flex items-center gap-[15px]">
                Say Hello <FaArrowRightLong />
              </button>
            </div> */}
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
