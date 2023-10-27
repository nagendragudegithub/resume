import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "../styles/homeStyles.scss";
const TextTyping = ({ sendData }) => {
  const text = `Nagendra Gude`;
  const delay = 100;

  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flag, setFlag] = useState(false);
  const callBack = () => {
    setFlag(true);
    sendData(flag);
  };

  useEffect(() => {
    TextTyping();
  }, [currentText]);

  const TextTyping = () => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
        if (currentText.length >= 11) {
          callBack();
        }
      }, delay);

      return () => clearTimeout(timeout);
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <Typography variant="h2" className="hi">
        Hi I'm
      </Typography>
      {currentText}

    </div>
  );
};

export default TextTyping;
