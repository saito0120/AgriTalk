import React, { useState, useEffect } from "react";
import "./styles/App.css";
import Login from ".agri-talk/src/Login.jsx";

function App() {
  const [fadeIn, setFadeIn] = useState(false);
  const [ripple, setRipple] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    setRipple(true);
    setTimeout(() => setShowLogin(true), 600); // 波紋アニメーションが終わったら画面切替
  };

  if (showLogin) {
    return <Login />;
  }

  return (
    <div 
      className="title-screen"
      onClick={handleClick}
      style={{ backgroundImage: "url('/images/bg.jpg')" }}
    >
      <h1>🌱 AgriTalk</h1>
      <p className={`start-text ${fadeIn ? "fade-in" : ""}`}>Start</p>
      {ripple && <span className="ripple" />}
    </div>
  );
}

export default App;
