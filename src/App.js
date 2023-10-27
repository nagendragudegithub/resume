import { BrowserRouter, Routes as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import "../src/App.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <Router>
          <Route exact path="/" element={<Nav />}>
            <Route path="/" element={<Home />} />
            <Route path="/exp" element={<Experience />} />
            <Route path="/edu" element={<Education />} />
            <Route path="/cont" element={<Contact />} />
          </Route>
        </Router>
      </BrowserRouter>
    </>
  );
}

export default App;
