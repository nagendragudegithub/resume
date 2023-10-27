import React, { useState, useEffect } from "react";

const WordFlicker = () => {
  const words = ["React Developer.", "Professional Coder."];

  const [part, setPart] = useState("");
  const [i, setI] = useState(0);
  const [offset, setOffset] = useState(0);
  const [forwards, setForwards] = useState(true);
  const [skipCount, setSkipCount] = useState(0);
  const skipDelay = 15;
  const speed = 70;

  useEffect(() => {
    const wordflick = setInterval(() => {
      if (forwards) {
        if (offset >= words[i].length) {
          setSkipCount((prevCount) => prevCount + 1);
          if (skipCount === skipDelay) {
            setForwards(false);
            setSkipCount(0);
          }
        }
      } else {
        if (offset === 0) {
          setForwards(true);
          setI((prevI) => (prevI + 1) % words.length);
          setOffset(0);
        }
      }

      const newPart = words[i].substr(0, offset);
      if (skipCount === 0) {
        if (forwards) {
          setOffset((prevOffset) => prevOffset + 1);
        } else {
          setOffset((prevOffset) => prevOffset - 1);
        }
      }

      setPart(newPart);
    }, speed);

    return () => clearInterval(wordflick);
  }, [i, offset, forwards, skipCount]);

  return <>{part}</>;
};

export default WordFlicker;
