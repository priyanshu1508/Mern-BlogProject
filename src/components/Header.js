import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import CreateIcon from '@mui/icons-material/Create';
import LogoutIcon from '@mui/icons-material/Logout';
import { UserContext } from "./UserContext";
import { Navigate } from "react-router-dom";

export default function Header() {
  const { setUserInfo, userInfo } = useContext(UserContext);
  const url = process.env.REACT_APP_BLOG_URL

  useEffect(() => {
    fetch(`${url}/profile`, {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout() {
    fetch(`${url}/logout`, {
      credentials: "include",
      method: "POST",
    });

    setUserInfo(null);
  }

  const username = userInfo?.username;

  return (
    <div>
      <header>{username && (
        <>
        <Link to="/index">
          <h1>BlogPost</h1>
        </Link>
        </>
      )}
      { !username && (
        <>
        <Link to="/">
          <h1>BlogPost</h1>
        </Link>
        </>
      )}
        <nav>
          {username && (
            <>
              <Link className="logo" to="/create">
               <CreateIcon/> Create Your Blog
              </Link>
              <Link className="logo" onClick={logout} to="/">
               <LogoutIcon/>  Logout({username})
              </Link>
            </>
          )}

          {!username && (
            <>
              <Link className="logo" to="/login">
              <PersonIcon/>   Login
              </Link>
              <Link className="logo" to="/register">
               <PersonAddAlt1Icon/> Register
              </Link>
            </>
          )}
        </nav>
      </header>
      <div></div>
    </div>
  );
}
