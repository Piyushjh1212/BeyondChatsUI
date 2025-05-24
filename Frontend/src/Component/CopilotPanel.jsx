import React, { useState } from "react";
import "./Style/CopilotPanel.css";

const CopilotPanel = ({ isOpen, conversation }) => {
  const [typingIndex, setTypingIndex] = useState(null);
  const [typedTexts, setTypedTexts] = useState(Array(3).fill(""));
  const [buttonLabels, setButtonLabels] = useState([
    "How do I get a refund?",
    "",
    "",
  ]);

  if (!conversation) return null;

  const suggestions = [
    {
      id: 1,
      text: "How do I get a refund?",
      text2:
        " To get a refund, please visit our Refund Policy page and follow the instructions provided. If you need further assistance, feel free to contact our support team — we're here to help!",
    },
  ];

  const handleSuggestionClick = (suggestion, index) => {
    setTypingIndex(index);

    const updatedLabels = [...buttonLabels];
    updatedLabels[index] = suggestion.text;
    setButtonLabels(updatedLabels);

    setTypedTexts((prev) => {
      const updated = [...prev];
      updated[index] = "";
      return updated;
    });

    let i = 0;
    const interval = setInterval(() => {
      setTypedTexts((prev) => {
        const updated = [...prev];
        updated[index] += suggestion.text2.charAt(i);
        return updated;
      });

      i++;
      if (i >= suggestion.text2.length) {
        clearInterval(interval);
        setTypingIndex(null);
      }
    }, 40);
  };

  return (
    <div className={`copilot-sidebar ${isOpen ? "open" : ""}`}>
      <h2>AI Copilot</h2>

      <div className="copilot-suggestions">
        <p>Copilot:</p>
        <ul>
          {suggestions.map((suggestion, index) => (
            <li key={index} className="copilot-suggestion-item">
              <div className="copilot-suggestion-button-div">
                 <button
                  className="copilot-suggestion-button"
                  disabled={typingIndex !== null && typingIndex !== index}
                  onClick={() => handleSuggestionClick(suggestion, index)}
                >
                 <span className="span"> Suggested</span> 💸{buttonLabels[index] || suggestion.text}
                </button>
                <input 
                type="text"
                placeholder="Type your message here" 
                className="copilot-Input"
                />
               
              </div>

              <p className="copilot-suggestion">{typedTexts[index]}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CopilotPanel;
