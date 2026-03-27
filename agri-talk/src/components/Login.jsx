//React初心者のためコメント多用

import React, { useState } from "react";
// Reactをインポート
// useStateは入力値や状態を管理するためのreactフック

import "agri-talk/src/components/Login.css"
// CSSファイルをインポート
// 見た目の装飾はCSSでまとめて管理する

function Login({ onLogin }){
    const [username, setUsername] = useState("");
    // username状態を作成
    // useState("") で初期値を空文字に設定
    const [password, setPassword] = useState("")
    // 一旦簡単にしているけどパスワードはハッシュ化すること
    const handleLogin = () => {
        alert(`認証は一旦パス: ${username}`);
        //でも処理用
        //実際はここでAPIにユーザー名とパスワードを送信して認証
        // 現在はアラートで確認するだけ
        onLogin();
        // 親コンポーネントから渡された onLogin を呼ぶ
        // これでログイン後に画面を切り替えることができる
    };

    return(
        <div className = "login-box">
            <h2>AgriTalk ログイン</h2>

            <input
                type="text"
                placeholder="ユーザ名"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

            <input
                type="password"
                placeholder="パスワード"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            
            <button onClick={handleLogin}>ログイン</button>
            {/* ログインボタン */}
            {/* 押すと handleLogin が実行される */}

            <p>
                <a href="#">新規登録</a> | <a href="#">パスワードを忘れた場合</a>
                    {/* 補助リンク */}
                    {/* クリックすると別画面に遷移する想定 */}
            </p>
        </div>
    );
}

export default Login;
// このコンポーネントを他のファイルから読み込めるようにする
