import logo from "./logo.svg";
import "./App.css";
import Main from "./view/Main";
import About from "./view/About";
import Menu from "./view/Menu";
import CustomersSay from "./view/CustomersSay";
import Chicago from "./view/Chicago";
import { Routes, Route, Link } from "react-router-dom";
import BookingPage from "./view/BookingPage";
import { useState } from "react";
import TaskList from "./view/TaskList";
import ConfirmedBooking from "./view/ConfirmedBooking ";
import j1 from "./resource/j1.jpg";
import sc from "./resource/sc.jpg";
import open from "./resource/open.jpg";
import logoTop from "./resource/logo.png";
import logo_footer from'./resource/logo_footer.png';
function App() {
  return (
    <>
      <header>
        <img src={logoTop} alt="logo" />
      </header>
      <nav>
        <ul>
          <li>
            <Link to="/" className="nav-item">
              Home
            </Link>
            <Link to="/Menu" className="nav-item">
              Menu
            </Link>
            <Link to="/booking-page" className="nav-item">
              Book
            </Link>
            <Link to="/about" className="nav-item">
              About
            </Link>
          </li>
        </ul>
      </nav>

      <main className="container">
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/Menu" element={<Menu />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/customers-say" element={<CustomersSay />}></Route>
          <Route path="/chicago" element={<Chicago />}></Route>
          <Route path="/booking-page" element={<BookingPage />}></Route>
          <Route
            path="/confirmed-booking"
            element={<ConfirmedBooking />}
          ></Route>
        </Routes>
      </main>

    <footer>
      <div>
        <img src={logo_footer} alt="footer" />
      </div>
      <div>
        <p>Copyright Jonathan Sum</p>
      </div>
    </footer>
    </>
  );
}

export default App;
