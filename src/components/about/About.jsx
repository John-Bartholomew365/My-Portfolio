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
import { useEffect, useState } from 'react';

const Home = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [isAppearing, setIsAppearing] = useState(true);

  const words = ['ABOUT', 'ME'];
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
  }, [currentLetterIndex, isWordComplete, isAppearing, currentWordIndex, words]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-black">
        {words.map((word, wordIndex) => (
          <span key={wordIndex} className={wordIndex > currentWordIndex ? 'hidden' : 'inline-block'}>
            {Array.from(word).map((letter, letterIndex) => (
              <span
                key={letterIndex}
                className={`inline-block transition-opacity duration-500 ${wordIndex === currentWordIndex && (isAppearing ? letterIndex >= currentLetterIndex : letterIndex > currentLetterIndex) ? 'opacity-0' : 'opacity-100'}`}
              >
                {letter}
              </span>
            ))}
            {wordIndex < currentWordIndex && <span>&nbsp;</span>}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default Home;
