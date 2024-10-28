// src/App.js
import React, { useState, useEffect, useRef } from "react";
import socket from "./webSocket";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([]);
  const messageEndRef = useRef(null);

  useEffect(() => {
    // Listen for 'sentimentData' events from the backend
    socket.on("sentimentData", (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    // Clean up when component unmounts
    return () => socket.off("sentimentData");
  }, []);

  useEffect(() => {
    // Scroll to the newest message
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const getSentimentColor = (score) => {
    if (score > 0.2) return "positive";
    if (score < -0.2) return "negative";
    return "neutral";
  };

  return (
    <div className="app">
      <h1>Real-Time Sentiment Analysis</h1>
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${getSentimentColor(msg.sentimentScore)}`}>
            <p>{msg.message}</p>
            <span className="score">Sentiment Score: {msg.sentimentScore.toFixed(2)}</span>
          </div>
        ))}
        <div ref={messageEndRef} />
      </div>
    </div>
  );
}

export default App;
