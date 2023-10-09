// Typewriter.js
import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const blink = keyframes`
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
`;

const TypewriterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  margin-top: 10px;
  /* background-color: #f0f0f0; */
`;

const Text = styled.div`
  font-size: 24px;
  position: relative;
  font-family: "Arial", sans-serif;
  color: #0085ff;
  padding: 20px;
  /* border: 2px solid #333; */
  border-radius: 8px;
  text-align: center;
  /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); */
`;

const Cursor = styled.span`
  position: absolute;
  top: 50%;
  right: -10px;
  transform: translateY(-50%);
  width: 10px;
  height: 24px;
  background-color: #333;
  animation: ${blink} 0.7s infinite;
`;

function Typewriter() {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const phrase = "Freelancers/Franchise/Reseller Required in all major cities";

  useEffect(() => {
    const typingInterval = 100;
    const deletingInterval = 60;

    const typeText = () => {
      if (isTyping) {
        if (text !== phrase) {
          const newText = phrase.substring(0, text.length + 1);
          setText(newText);
        } else {
          setIsTyping(false);
          setTimeout(() => setIsTyping(true), 4000);
        }
      } else {
        if (text.length > 0) {
          const newText = text.substring(0, text.length - 1);
          setText(newText);
        } else {
          setIsTyping(true);
        }
      }
    };

    const interval = isTyping ? typingInterval : deletingInterval;
    const timer = setTimeout(typeText, interval);

    return () => clearTimeout(timer);
  }, [text, isTyping]);

  return (
    <TypewriterContainer>
      <Text>
        {text}
        {isTyping && <Cursor />}
      </Text>
    </TypewriterContainer>
  );
}

export default Typewriter;
