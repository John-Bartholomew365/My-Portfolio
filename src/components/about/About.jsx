// "use client";
// import { useEffect, useState } from 'react';

// const Home = () => {
//   const [currentWordIndex, setCurrentWordIndex] = useState(0);
//   const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
//   const [isAppearing, setIsAppearing] = useState(true);

//   const words = ['MICRO', 'SMALL', 'MEDIUM', 'ENTERPRISE SCALE'];
//   const currentWord = words[currentWordIndex];
//   const isWordComplete = isAppearing
//     ? currentLetterIndex >= currentWord.length
//     : currentLetterIndex < 0;

//   useEffect(() => {
//     if (isWordComplete) {
//       const delay = isAppearing ? 2000 : 500;
//       const wordTimeout = setTimeout(() => {
//         if (isAppearing) {
//           if (currentWordIndex === words.length - 1) {
//             setIsAppearing(false);
//             setCurrentLetterIndex(words[currentWordIndex].length - 1);
//           } else {
//             setCurrentWordIndex((prev) => prev + 1);
//             setCurrentLetterIndex(0);
//           }
//         } else {
//           if (currentWordIndex === 0) {
//             setIsAppearing(true);
//             setCurrentLetterIndex(0);
//           } else {
//             setCurrentWordIndex((prev) => prev - 1);
//             setCurrentLetterIndex(words[currentWordIndex - 1].length - 1);
//           }
//         }
//       }, delay);

//       return () => clearTimeout(wordTimeout);
//     } else {
//       const letterTimeout = setTimeout(() => {
//         setCurrentLetterIndex((prev) => (isAppearing ? prev + 1 : prev - 1));
//       }, 200);

//       return () => clearTimeout(letterTimeout);
//     }
//   }, [currentLetterIndex, isWordComplete, isAppearing, currentWordIndex, words]);

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <h1 className="text-4xl font-bold text-black">
//         {words.map((word, wordIndex) => (
//           <span key={wordIndex} className={wordIndex > currentWordIndex ? 'hidden' : 'inline-block'}>
//             {Array.from(word).map((letter, letterIndex) => (
//               <span
//                 key={letterIndex}
//                 className={`inline-block transition-opacity duration-500 ${wordIndex === currentWordIndex && (isAppearing ? letterIndex >= currentLetterIndex : letterIndex > currentLetterIndex) ? 'opacity-0' : 'opacity-100'}`}
//               >
//                 {letter}
//                 {wordIndex === 3 && letterIndex === 9 && <span>&nbsp;</span>}
//               </span>
//             ))}
//             {wordIndex < currentWordIndex && <span>&nbsp;</span>}
//           </span>
//         ))}
//       </h1>
//     </div>
//   );
// };

// export default Home;

"use client";
import { useEffect, useState } from "react";
import { FaCogs } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { FaUserTie } from 'react-icons/fa';

const Home = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [isAppearing, setIsAppearing] = useState(true);

  const words = ["ABOUT", "ME"];
  const currentWord = words[currentWordIndex];
  const isWordComplete = isAppearing
    ? currentLetterIndex >= currentWord.length
    : currentLetterIndex < 0;

  useEffect(() => {
    if (isWordComplete) {
      const delay = isAppearing ? 2000 : 500;
      const wordTimeout = setTimeout(() => {
        if (isAppearing) {
          if (currentWordIndex === words.length - 1) {
            setIsAppearing(false);
            setCurrentLetterIndex(words[currentWordIndex].length - 1);
          } else {
            setCurrentWordIndex((prev) => prev + 1);
            setCurrentLetterIndex(0);
          }
        } else {
          if (currentWordIndex === 0) {
            setIsAppearing(true);
            setCurrentLetterIndex(0);
          } else {
            setCurrentWordIndex((prev) => prev - 1);
            setCurrentLetterIndex(words[currentWordIndex - 1].length - 1);
          }
        }
      }, delay);

      return () => clearTimeout(wordTimeout);
    } else {
      const letterTimeout = setTimeout(() => {
        setCurrentLetterIndex((prev) => (isAppearing ? prev + 1 : prev - 1));
      }, 200);

      return () => clearTimeout(letterTimeout);
    }
  }, [
    currentLetterIndex,
    isWordComplete,
    isAppearing,
    currentWordIndex,
    words,
  ]);

  return (
    <div className="">
      <div className="flex justify-center items-center py-[30px] ">
        <h1 className="text-4xl font-bold text-black">
          {words.map((word, wordIndex) => (
            <span
              key={wordIndex}
              className={
                wordIndex > currentWordIndex ? "hidden" : "inline-block"
              }
            >
              {Array.from(word).map((letter, letterIndex) => (
                <span
                  key={letterIndex}
                  className={`inline-block transition-opacity duration-500 ${
                    wordIndex === currentWordIndex &&
                    (isAppearing
                      ? letterIndex >= currentLetterIndex
                      : letterIndex > currentLetterIndex)
                      ? "opacity-0"
                      : "opacity-100"
                  }`}
                >
                  {letter}
                </span>
              ))}
              {wordIndex < currentWordIndex && <span>&nbsp;</span>}
            </span>
          ))}
        </h1>
      </div>
      <div className="px-[100px] py-[20px] text-center ">
        <p className="text-[#FF0000] font-bold text-[12px]">
          {/* I am a passionate frontend developer with a strong foundation in
          creating visually appealing and user-friendly web applications. <br />My
          journey in web development is driven by a deep interest in coding and
          a commitment to continuous learning. <br />As an introvert, I excel in
          focusing on intricate details and delivering high-quality work. <br />Beyond
          coding, I have a deep passion for football, which helps me stay active
          and brings a balanced perspective to my work and life. */}
          SERVICES
        </p>
        <h1 className="font-bold text-[30px] py-[10px]">
          Expertise Service! Let&apos;s check it out
        </h1>
        <p className="w-[500px] m-auto pt-3 opacity-70">
          With a keen eye for detail, I offer expertise in web design and
          development. My services include crafting responsive websites,
          developing Next.js applications, and creating intuitive UI/UX designs.
          My dedication to quality ensures top-notch solutions tailored to each
          project&apos;s unique needs.
        </p>
      </div>
      <div className="flex gap-[20px] px-[100px]">
        <div className="bg-gray-100 my-4 p-4 rounded-md w-[400px] m-auto flex flex-col items-center justify-center">
          <FaCogs size={50} color="red" />
          <h1 className="font-bold text-[20px] py-[10px]">Graphics Designer</h1>
          <p className="opacity-70 text-[14px] text-center w-[350px] m-auto">
            I&apos;m a beginner graphic designer with a passion for creating
            visually appealing designs. While still learning, I focus on
            developing my skills in creating eye-catching graphics and layouts
            for both digital and print media. I&apos;m eager to explore new
            techniques and deliver fresh, creative solutions.
          </p>
        </div>
        <div className="bg-[#FF0000] text-white my-4 p-4 rounded-md w-[400px] m-auto flex flex-col items-center justify-center">
          <FaLaptopCode size={50} color="white" />
          <h1 className="font-bold text-[20px] py-[10px]">
            Software Developer
          </h1>
          <p className="opacity-70 text-[14px] text-center w-[350px] m-auto">
            I&apos;m a dedicated frontend developer with a passion for creating
            visually appealing and user-friendly web applications. My expertise
            lies in developing sophisticated Next.js projects, designing
            intuitive UI/UX interfaces, and integrating APIs seamlessly. I am
            committed to continuous learning and strive to deliver high-quality
            solutions tailored to meet the unique needs of each project.
          </p>
        </div>
        <div className="bg-gray-100 my-4 p-4 rounded-md w-[400px] m-auto flex flex-col items-center justify-center">
        <FaUserTie size={50} color="red" />
          <h1 className="font-bold text-[20px] py-[10px]">
            Social-Media Manager
          </h1>
          <p className="opacity-70 text-[14px] text-center w-[350px] m-auto">
           
            In addition to frontend development, where I specialize in creating
            responsive websites and integrating APIs, I also have skills in
            graphic design and social media management. My diverse expertise
            allows me to deliver comprehensive solutions that enhance both
            functionality and visual appeal while effectively managing online
            presence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
