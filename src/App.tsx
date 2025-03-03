import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo from "./assets/images/infty.svg";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";

const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-md fixed-top d-main-nav d-tgbg">
      <div className="container-fluid px-4">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list open-menu"></i>
          <i className="bi bi-x-lg close-menu"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Xhst"
              >
                Github <i className="bi bi-arrow-up-right"></i>
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects">
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
