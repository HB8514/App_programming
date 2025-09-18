// src/App.js
import { useState } from "react";
import "./App.css";
import Display from "./components/Display";
import Keypad from "./components/Keypad";
import History from "./components/History";

function App() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);

  const handleClick = (value) => {
    if (value === "C") {
      setInput("");
      return;
    }
    if (value === "=") {
      try {
        const result = eval(input).toString();
        setInput(result);
        setHistory((prev) => [`${input} = ${result}`, ...prev].slice(0, 5));
      } catch {
        setInput("Error");
      }
      return;
    }
    setInput((prev) => prev + value);
  };

  const clearHistory = () => {
    setHistory([]);
  };

  return (
    <div className="container">
      <h1>React 계산기</h1>

      {input === "Error" && (
        <p style={{ color: "red", marginTop: 0 }}>잘못된 수식!</p>
      )}

      <Display value={input || "0"} />
      <Keypad onKey={handleClick} />
      <History records={history} />

      {/* 2번: History 바로 아래 버튼 */}
      <button onClick={clearHistory} style={{ marginTop: "8px" }}>
        히스토리 초기화
      </button>
    </div>
  );
}

export default App;
