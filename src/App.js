import "./App.css";
import React from "react";
// import Header from "./header/header";
import Footer from "./footer/footer";
import Contact from "./contact/contact";
import Skills from "./skills/skills";
import Projects from "./projects/projects";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <div>
            {/* <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/users">Users</Link>
                </li>
              </ul>
            </nav> */}
            <Routes>
              <Route path="/about">{/* <Footer /> */}</Route>
              <Route path="/users">{/* <Contact /> */}</Route>
              <Route path="/">{/* <Skills /> */}</Route>
            </Routes>
          </div>
        </Router>

        <Projects />
        {/* <Header /> */}
        <Skills />
        <Contact />
        <Footer />
      </>
    );
  }
}

export default App;
