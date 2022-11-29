import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// react-bootstrap
import Container from 'react-bootstrap/Container';

// pages
import FeedPage from './pages/FeedPage';
import ExplorePage from "./pages/ExplorePage";
import LoginPage from "./pages/LoginPage";
import UserPage from "./pages/UserPages";

// components
import Header from './components/Header';

// export context-hooks
export const UserContext = React.createContext(); // put here, since app.js is the parent.


export default function App() {
  const BASE_API_URL = process.env.REACT_APP_BASE_API_URL;

  const [userinfo, setUserinfo] = React.useState({"test":"output"});

  React.useEffect(() => { (async () => {
    const response = await fetch(BASE_API_URL + '/get_from_database');
    if (response.ok) {
      const data = await response.json();
      setUserinfo(data);
    }
    else {
      setUserinfo(null);
    }
  })();
  }, []);

  return (
    <Container fluid className="App">
      <BrowserRouter>

        <Header />

        <Routes>
          <Route path="/" element={<FeedPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/user/:username" element={<UserPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

      </BrowserRouter>
      
      {Object.keys(userinfo).map(name => <li>{name}: {userinfo[name]}</li>)}

    </Container>
  );
}
