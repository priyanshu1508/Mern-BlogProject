import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "./UserContext";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [text, setText] = useState('');
  const {setUserInfo} = useContext(UserContext)

  async function login(ev) {
    setText("Logging you in...")
    ev.preventDefault();
    const url = process.env.REACT_APP_BLOG_URL

    const response = await fetch(`${url}/login`, {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
      credentials:'include',
    });
    if (response.ok) {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
        setRedirect(true);
      })
      setRedirect(true)
    } else {
      alert("Wrong Credentials");
    }
  }
  if(redirect){
    return <Navigate to={'/index'} />
  }

  return (
    <div>
      <form className="login" onSubmit={login}>
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={ev => setUsername(ev.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={ev => setPassword(ev.target.value)}
        />
        <p>{text}</p>
        <button>Login</button>
      </form>
      <div className="container-fluid" style={{position:"fixed",bottom:"0", backgroundColor: "#222" }}>
        <footer className="py-2">
          <p
            className="text-center fw-lg fs-5 "
            style={{ height: "30px", color: "#fff" }}
          >
            BlogPosts © 2023 (Project By Priyanshu Mishra)
          </p>
        </footer>
      </div>
    </div>
  );
}
