// import Image from "next/image";
// import React from "react";
// import { FaArrowRightLong } from "react-icons/fa6";

// const Hero = () => {
//   return (
//     <div className="py-[100px] px-[100px]">
//       <div className="flex items-center justify-center gap-[40px]">
//         <div className="">
//           <h1 className="text-[27px] pl-[10px]">Hi, I&apos;m </h1>
//           <h1 className="text-[40px] leading-[50px]">
//             <span className="font-bold   ">John Bartholomew ANIMASAHUN</span>
//           </h1>
//           <p className="w-[400px] py-[20px]">
//             I'm a frontend developer specializing in creating engaging and
//             responsive web experiences using HTML, CSS, and JavaScript. <br/>
//             Passionate about bringing ideas to life, I strive to make the web
//             more beautiful and user-friendly.
//           </p>

//             <div className="flex flex-row gap-[20px] ">
//               <div className="hover: hover:bg-[#FFFFFF] hover:border-[1px] hover:border-[#FF0000] py-[10px] px-[40px] rounded-[50px] bg-[#FF0000] hover:text-black border-[1px] border cursor-pointer">
//                 <button className="flex items-center gap-[15px]">Say Hello <FaArrowRightLong/></button>
//               </div>
//               <div className="hover: hover:bg-[#FF0000] hover: py-[10px] px-[40px] rounded-[50px] bg-[#FFFFFF] hover:text-black border-[1px] border-[1px] border-[#FF0000] border cursor-pointer">
//                 <button>My portfolio</button>
//               </div>
//             </div>
//         </div>

//         <div className="bg-[#FF0000] p-[2px] rounded-[100%]">
//           <Image
//             className="rounded-full"
//             src="/profile-image.jpeg"
//             alt="Profile Image"
//             width={450}
//             height={450}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;



// "use client";
// import Image from "next/image";
// import React, { useEffect, useState } from "react";
// import { FaArrowRightLong } from "react-icons/fa6";

// const Hero = () => {
//   const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
//   const [isAppearing, setIsAppearing] = useState(true);

//   const name = "John Bartholomew ANIMASAHUN";
//   const isNameComplete = isAppearing 
//     ? currentLetterIndex >= name.length 
//     : currentLetterIndex < 0;

//   useEffect(() => {
//     if (isNameComplete) {
//       const delay = isAppearing ? 2000 : 500; // Adjust the delay
//       const nameTimeout = setTimeout(() => {
//         setIsAppearing(!isAppearing);
//         setCurrentLetterIndex(isAppearing ? name.length - 1 : 0);
//       }, delay);

//       return () => clearTimeout(nameTimeout);
//     } else {
//       const letterTimeout = setTimeout(() => {
//         setCurrentLetterIndex((prev) => (isAppearing ? prev + 1 : prev - 1));
//       }, 200); // Speed of each letter appearing/disappearing

//       return () => clearTimeout(letterTimeout);
//     }
//   }, [currentLetterIndex, isNameComplete, isAppearing, name.length]);

//   return (
//     <div className="py-[100px] px-[100px]">
//       <div className="flex items-center justify-center gap-[40px]">
//         <div>
//           <h1 className="text-[27px] pl-[10px]">Hi, I&apos;m </h1>
//           <h1 className="text-[40px] leading-[50px]">
//             <span className="font-bold">
//               {Array.from(name).map((letter, index) => (
//                 <span
//                   key={index}
//                   className={`inline-block transition-opacity duration-500 ${isAppearing ? (index >= currentLetterIndex ? 'opacity-0' : 'opacity-100') : (index <= currentLetterIndex ? 'opacity-100' : 'opacity-0')}`}
//                 >
//                   {letter}
//                 </span>
//               ))}
//             </span>
//           </h1>
//           <p className="w-[400px] py-[20px]">
//             I'm a frontend developer specializing in creating engaging and
//             responsive web experiences using HTML, CSS, and JavaScript. <br />
//             Passionate about bringing ideas to life, I strive to make the web
//             more beautiful and user-friendly.
//           </p>

//           <div className="flex flex-row gap-[20px]">
//             <div className="hover:bg-[#FFFFFF] hover:border-[1px] hover:border-[#FF0000] py-[10px] px-[40px] rounded-[50px] bg-[#FF0000] hover:text-black border-[1px] border cursor-pointer">
//               <button className="flex items-center gap-[15px]">
//                 Say Hello <FaArrowRightLong />
//               </button>
//             </div>
//             <div className="hover:bg-[#FF0000] py-[10px] px-[40px] rounded-[50px] bg-[#FFFFFF] hover:text-black border-[1px] border-[#FF0000] cursor-pointer">
//               <button>My portfolio</button>
//             </div>
//           </div>
//         </div>

//         <div className="bg-[#FF0000] p-[2px] rounded-[100%]">
//           <Image
//             className="rounded-full"
//             src="/profile-image.jpeg"
//             alt="Profile Image"
//             width={450}
//             height={450}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [isAppearing, setIsAppearing] = useState(true);

  // Split the name into parts
  const nameParts = ["John", "Bartholomew", "ANIMASAHUN"];
  const currentWord = nameParts.join(""); // Join for letter effect without space
  const isNameComplete = isAppearing
    ? currentLetterIndex >= currentWord.length
    : currentLetterIndex < 0;

  useEffect(() => {
    if (isNameComplete) {
      const delay = isAppearing ? 2000 : 500; // Adjust the delay for the name complete check
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
      <div className="flex items-center justify-center gap-[40px]">
        <div>
          <h1 className="text-[27px] pl-[10px]">Hi, I&apos;m </h1>
          <h1 className="text-[40px] leading-[50px]">
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
                            : "opacity-0 translate-x-4" // Make letters appear from the right
                          : index >= currentLetterIndex
                          ? "opacity-0 translate-x-4" // Letters disappear towards the right
                          : "opacity-100 translate-x-0" // Letters come back into place
                      }`}
                    >
                      {letter}
                    </span>
                  ))}
                  {/* Add space between the name parts */}
                  {partIndex < nameParts.length - 1 && <span>&nbsp;</span>}
                </span>
              ))}
            </span>
          </h1>
          <p className="w-[400px] py-[20px]">
            I&apos;m a frontend developer specializing in creating engaging and
            responsive web experiences using HTML, CSS, and JavaScript. <br />
            Passionate about bringing ideas to life, I strive to make the web
            more beautiful and user-friendly.
          </p>

          <div className="flex flex-row gap-[20px]">
            <div className="hover:bg-[#FFFFFF] hover:border-[1px] hover:border-[#FF0000] py-[10px] px-[40px] rounded-[50px] bg-[#FF0000] hover:text-black border-[1px] border cursor-pointer">
              <button className="flex items-center gap-[15px]">
                Say Hello <FaArrowRightLong />
              </button>
            </div>
            <div className="hover:bg-[#FF0000] py-[10px] px-[40px] rounded-[50px] bg-[#FFFFFF] hover:text-black border-[1px] border-[#FF0000] cursor-pointer">
              <button>My portfolio</button>
            </div>
          </div>
        </div>

        <div className="bg-[#FF0000] p-[2px] rounded-[100%]">
          <Image
            className="rounded-full"
            src="/profile-image.jpeg"
            alt="Profile Image"
            width={450}
            height={450}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

