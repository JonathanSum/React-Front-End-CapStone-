import React from "react";
import j1 from'../resource/j1.jpg';
import j2 from'../resource/j2.jpg';

const Menu = () => {
  return <>
   <section className="c1 c-item">
      <article>
        <h2>Jewelry 1</h2>
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
        <h2>Jewelry 2</h2>
        <img src={j2} alt="schedule" height="200px" />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
          inventore libero, non illum reiciendis accusamus, facilis mollitia
          rem praesentium maiores quod dicta ad aliquam sit dolores saepe
          corporis. Maxime, nesciunt!
        </p>
      </article>
    </section>

  </>;
};

export default Menu;
