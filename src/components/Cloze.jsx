import React, { useState } from "react";

const DynamicUnderlineCopy = () => {
  const [sentence, setSentence] = useState("");
  const [underlineWord, setUnderlineWord] = useState("");
  const [clickedWord, setClickedWord] = useState("");

  const handleWordClick = async (word) => {
    if (word === underlineWord) {
      try {
        await navigator.clipboard.writeText(word);
        setClickedWord(word);
      } catch (error) {
        console.error("Failed to copy text:", error);
      }
    }
  };

  const renderSentence = () => {
    return sentence.split(" ").map((word, index) => (
      <span
        key={index}
        onClick={() => handleWordClick(word)}
        style={{
          textDecoration: word === underlineWord ? "underline" : "none",
          cursor: word === underlineWord ? "pointer" : "default",
          color: word === underlineWord ? "blue" : "black",
          marginRight: "5px",
        }}
      >
        {word}
      </span>
    ));
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      
      <div style={{ marginBottom: "20px" }}>
        <label>
          Enter Sentence:
          <input
            type="text"
            value={sentence}
            onChange={(e) => setSentence(e.target.value)}
            placeholder="Type a sentence"
            style={{
              marginLeft: "10px",
              padding: "5px",
              width: "300px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </label>
      </div>
      <div style={{ marginBottom: "20px" }}>
        <label>
          Word to Underline:
          <input
            type="text"
            value={underlineWord}
            onChange={(e) => setUnderlineWord(e.target.value)}
            placeholder="Word to underline"
            style={{
              marginLeft: "10px",
              padding: "5px",
              width: "200px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </label>
      </div>
      <div>
        <h3>Rendered Sentence:</h3>
        <p>
          {sentence ? renderSentence() : "Enter a sentence to display here."}
        </p>
      </div>
      {clickedWord && (
        <div style={{ marginTop: "20px", fontSize: "16px", color: "green" }}>
          <strong>Clicked & Copied Word:</strong> {clickedWord}
        </div>
      )}
    </div>
  );
};

export default DynamicUnderlineCopy;
