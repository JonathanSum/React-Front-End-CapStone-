import React from "react";
import "./Chicago.css";
import j1 from'../resource/j1.jpg';
import sc from'../resource/sc.jpg';
import open from'../resource/open.jpg';
import logo_footer from'../resource/logo_footer.png';

const Chicago = () => {
  return <>
      <header>
      <img src="logo.png" alt="logo" />
    </header>
    <nav>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="menu.html">Menu</a></li>
        <li><a href="book.html">Book</a></li>
        <li><a href="about.html">About</a></li>
      </ul>
    </nav>
    <main className="container">
      <section className="discount">
        <article>
          <h2>20% Off This Weekend</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
            inventore libero, non illum reiciendis accusamus, facilis mollitia
            rem praesentium maiores quod dicta ad aliquam sit dolores saepe
            corporis. Maxime, nesciunt!
          </p>
        </article>
      </section>
      <section className="c1 c-item">
        <article>
          <h2>Our Jewelry</h2>
          <img src={j1} alt="Jewelry" width="300px" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
            inventore libero, non illum reiciendis accusamus, facilis mollitia
            rem praesentium maiores quod dicta ad aliquam sit dolores saepe
            corporis. Maxime, nesciunt!
          </p>
        </article>
      </section>
      <section className="c2 c-item">
        <article>
          <h2>Make a Schedule</h2>
          <img src={sc} alt="schedule" height="200px" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
            inventore libero, non illum reiciendis accusamus, facilis mollitia
            rem praesentium maiores quod dicta ad aliquam sit dolores saepe
            corporis. Maxime, nesciunt!
          </p>
        </article>
      </section>
      <section className="c3 c-item">
        <article>
          <h2>Opening Hours</h2>
          <img src={open} alt="hours" height="200px" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
            inventore libero, non illum reiciendis accusamus, facilis mollitia
            rem praesentium maiores quod dicta ad aliquam sit dolores saepe
            corporis. Maxime, nesciunt!
          </p>
        </article>
      </section>
    </main>
    <footer>
      <div>
        <img src={logo_footer} alt="footer" />
      </div>
      <div>
        <p>Copyright Jonathan Sum</p>
      </div>
    </footer>
  </>;
};

export default Chicago;
