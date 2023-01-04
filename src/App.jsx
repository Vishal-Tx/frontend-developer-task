import React from "react";
import { Auth, Home, Layout, Main } from "./Components";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/posts" />} />

          <Route path="posts">
            <Route index exact element={<Home />} />
          </Route>

          <Route
            path="/auth"
            exact
            // element={!user ? <Auth /> : <Navigate to="/posts" />}
            element={<Auth />}
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
