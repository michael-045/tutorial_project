import React from "react";
import {UserContext} from './App.js';

export default function LoginForm() {
  const username = React.useRef();
  const userContext = React.useContext(UserContext);

  const onSubmit = (ev) => {
    ev.preventDefault(); //prevents http request from sending (to server side, or to change url)
    console.log(username.current.value);
    userContext.loginUser(username.current.value);
  };

  const onLogout = (ev) => {
    ev.preventDefault();
    console.log("logged out");
    userContext.logoutUser();
  }


  return (
    <div>
      { userContext.username === null ?
        <form onSubmit={onSubmit}>
          <input type="text" ref={username} />
          <input type="submit" value="login" />
        </form>
      : //else
        <button onClick={ userContext.logoutUser }>Logout</button>
      }
    </div>
  );
}