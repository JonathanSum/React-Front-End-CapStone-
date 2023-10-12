import React from "react";
import self from "../resource/self.jpg"
import '../App.css'
const About = () => {
  return <>
   <section class="c1 c-item">
      <article>
        <h2>Jonathan Sum</h2>
        <img src={self} alt="self" width="300px" />
        <p>
        Hi, I'm Jonathan Sum, a software engineer with expertise in Deep Learning, web, and Android. I'm passionate about using AI to solve complex problems.
        </p>
      </article>
    </section>
    <section class="c2 c-item">
      <article>
        <h2>Contact</h2>

        <p>
        Github: https://github.com/JonathanSum
Profile: https://jonathansum.github.io/
Large Language Model Coding Blog: https://jonathansum.github.io/Blog
        </p>
      </article>
    </section>

  </>;
};

export default About;
// 