import React from "react";
import { Main } from "./Components";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

const App = () => {
  return (
    <div className="rootContainer">
      <Main />
    </div>
    //   <Router>
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       <Route index element={<Navigate to="/posts" />} />

    //       <Route path="posts">
    //         <Route index exact element={<Home />} />
    //         <Route path="search" exact element={<Home />} />
    //         <Route path=":id" exact element={<PostDetails />} />
    //       </Route>

    //       <Route
    //         path="/auth"
    //         exact
    //         // element={!user ? <Auth /> : <Navigate to="/posts" />}
    //         element={<Auth />}
    //       />

    //       <Route path="/user/:id" exact element={<UserDetails />} />
    //     </Route>
    //   </Routes>
    // </Router>
  );
};

export default App;
