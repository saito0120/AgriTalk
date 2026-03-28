import React, { useState, useEffect } from "react";
import "./App.css";
import Login from "./components/Login";

function App() {
  const [fadeIn, setFadeIn] = useState(false);
  const [ripple, setRipple] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [imgStyle, setImgStyle] = useState({});

  // フェードイン
  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // 画像サイズ調整
  useEffect(() => {
    const updateImgStyle = () => {
      const screenRatio = window.innerWidth / window.innerHeight;
      const imgRatio = 1920 / 1080; // 画像の比率を入力
      if (screenRatio < imgRatio) {
        // 縦長画面なら高さ優先
        setImgStyle({ width: "auto", height: "100vh" });
      } else {
        // 横長画面なら幅優先
        setImgStyle({ width: "100vw", height: "auto" });
      }
    };
    updateImgStyle();
    window.addEventListener("resize", updateImgStyle);
    return () => window.removeEventListener("resize", updateImgStyle);
  }, []);

  const handleClick = () => {
    setRipple(true);
    setTimeout(() => setShowLogin(true), 600); // 波紋後に画面切替
  };

  if (showLogin) return <Login />;

  return (
    <div className="title-screen" onClick={handleClick}>
      <div className="background-wrapper">
        <img
          src={process.env.PUBLIC_URL + "/images/title.png"}
          alt="title"
          style={imgStyle}
        />
      </div>
        <div className={`title-container ${fadeIn ? "fade-in" : ""}`}>
          <h1>AgriTalk</h1>
          <p className="start-text">Start</p>
          <p className="bg-text">背景画：Gemini</p>
        </div>
      {ripple && <span className="ripple" />}
    </div>
  );
}

export default App;