import logo from "./logo.svg";
import "./App.css";
import Main from "./view/Main";
import Specials from "./view/Specials";
import Call from "./view/Call";
import CustomersSay from "./view/CustomersSay";
import Chicago from "./view/Chicago";
import { Routes, Route, Link } from "react-router-dom";
import BookingPage from "./view/BookingPage";
import { useState } from "react";
import TaskList from "./view/TaskList";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, task: "Go shopping", done: true },
    { id: 2, task: "Wash dishes", done: false },
  ]);
  return (
    <div className="main-grid">
      <header> Header </header>
      <TaskList tasks={tasks} />
      <nav className="nav-bar">
        <Link to="/" className="nav-item">
          Main
        </Link>
        <br />
        <Link to="/call" className="nav-item">
          CallToAction
        </Link>
        <br />
        <Link to="/specials" className="nav-item">
          Specials
        </Link>
        <br />
        <Link to="/customers-say" className="nav-item">
          Customers Say
        </Link>
        <br />
        <Link to="/chicago" className="nav-item">
          Chicago
        </Link>
        <br />
        <Link to="/booking-page" className="nav-item">
          Booking Page
        </Link>
        <br />
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/call" element={<Call />}></Route>
          <Route path="/specials" element={<Specials />}></Route>
          <Route path="/customers-say" element={<CustomersSay />}></Route>
          <Route path="/chicago" element={<Chicago />}></Route>
          <Route path="/booking-page" element={<BookingPage />}></Route>
        </Routes>
      </main>

      <footer> Footer </footer>
    </div>
  );
}

export default App;
