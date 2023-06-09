import {Link} from "react-router-dom";
import {useContext, useEffect} from "react";
import {UserContext} from "./UserContext";
import './App.css'


export default function Header() {
  const {setUserInfo,userInfo} = useContext(UserContext);
  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
        localStorage.setItem('username', userInfo.username); // Store the username in local storage
      
      });
    });
    setUserInfo();
  }, [setUserInfo]);

  function logout() {
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;

  return (
    <header>
      <Link to="/" className="logo">MYBLOG</Link>
      <nav>
        {username && (
          <div className='afterlogin'>
            <Link to="/create" style={{padding:'7px',hover:'red'}}>Createpost</Link>
            <a href=' ' onClick={logout}>Logout ({username})</a>
          </div>
        )}
        {!username && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
     
    </header>
  );
}