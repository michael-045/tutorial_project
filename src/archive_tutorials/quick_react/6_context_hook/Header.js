import React from "react";
import {UserContext} from './App.js'

export default function Header() {
  const currentUser = React.useContext(UserContext);
  console.log(currentUser);
  return (
    <div>
      {currentUser.username ?
        <p>Welcome, {currentUser.username}!</p>
      :
        <p>Please login</p>
      }
    </div>
  );
}