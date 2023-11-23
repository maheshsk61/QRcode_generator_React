import React, { useState } from "react";
import "./App.css";
import QRCode from "react-qr-code";
function App() {
  const [text, setText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  function handleChange(e) {
    const input = e.target.value;
    if (input.trim() === "") {
      setErrorMessage("Please provide input to generate QR code");
    } else {
      setErrorMessage("");
    }
    setText(input);
  }
  return (
    <div className="App">
      <h1>QR CODE Generator</h1>
      {text && <QRCode value={text} style={{padding:'10px'}}/>}
      <input
        type="text"
        placeholder="Enter the text to generate"
        onChange={handleChange}
      />
      <p>{errorMessage}</p>
    </div>
  );
}
export default App;
