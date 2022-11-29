import React from "react";
import "./styles.css";
import Navigation from "./Navigation.js"
import Header from "./Header.js"

export const UserContext = React.createContext(); // put here, since app.js is the parent.

export default function App() {
  const [username, setUsername] = React.useState(null);

  const currentUser = { // value that will be passed into the UserContext ref. Ref don't carry the values.
    username: username,
    loginUser: (_username) => { setUsername(_username); },
    logoutUser: () => { setUsername(null); },
  }

  return (
    <div className="App">
      <h1>Part 6: The Context Hook</h1>

      <UserContext.Provider value={currentUser}>
        <Navigation />
        <Header />
      </UserContext.Provider>

    </div>
  );
}
