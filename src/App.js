import React from "react";
import "./styles.css";

export default function App() {
  const handleClick = () => {
    console.log("Button clicked from App!");
  };

  return (
    <div>
      <Button
        color="red"
        disabled={false}
        text="Click me"
        onClick={handleClick}
      />
      <Button
        color="green"
        disabled={true}
        text="Click me"
        onClick={handleClick}
      />
      <Button
        color="blue"
        disabled={false}
        text="Click me"
        onClick={handleClick}
      />
    </div>
  );
}

function Button({ color, disabled, text, onClick }) {
  const handleClick = () => {
    console.log("Button clicked!");
    onClick();
  };

  return (
    <button
      style={{ color: color, height: "100px", backgroundColor: "yellow" }}
      disabled={disabled}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
