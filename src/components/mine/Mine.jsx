import { useEffect, useState } from 'react';

const words = ['MICRO', 'SMALL', 'MEDIUM', 'ENTERPRISE SCALE'];

const Home = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

  useEffect(() => {
    const letterTimeout = setTimeout(() => {
      setCurrentLetterIndex((prev) => prev + 1);
    }, 100); // Adjust the speed of each letter appearing

    return () => clearTimeout(letterTimeout);
  }, [currentLetterIndex]);

  useEffect(() => {
    if (currentLetterIndex >= words[currentWordIndex]?.length) {
      const wordTimeout = setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setCurrentLetterIndex(0);
      }, 500); // Adjust the delay between words

      return () => clearTimeout(wordTimeout);
    }
  }, [currentLetterIndex, currentWordIndex]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="text-4xl font-bold text-black">
        {words.map((word, index) => (
          <span
            key={index}
            className={index > currentWordIndex ? 'hidden' : 'inline-block'}
          >
            {Array.from(word).map((letter, letterIndex) => (
              <span
                key={letterIndex}
                className={`inline-block transition-opacity duration-500 ${index === currentWordIndex && letterIndex >= currentLetterIndex ? 'opacity-0' : 'opacity-100'}`}
              >
                {letter}
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Home;
