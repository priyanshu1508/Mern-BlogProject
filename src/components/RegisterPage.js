import React, { useState } from "react";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  async function register(ev){
        ev.preventDefault();
      const url = process.env.REACT_APP_BLOG_URL

        const response = await fetch(`${url}/register`,{
            method:'POST',
            body:JSON.stringify({username,password}),
            headers:{'Content-Type':'application/json'}
        })
        if(response.status === 200){
            alert("User Registered")
        } else {
            alert("Registraction Failed")
        }
    
  }
  return (
    <div>
      <form className="register" onSubmit={register}>
        <h1>Register</h1>
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
        <button>Register</button>
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
