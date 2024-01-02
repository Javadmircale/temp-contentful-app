import React from "react";
import heroImg from "./assets/hero.svg";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Twee everyday carry tattooed photo booth green juice. Direct trade
            tacos tousled food truck drinking vinegar. Lo-fi neutra hell of
            crucifix chambray tacos live-edge ennui helvetica. Cred synth
            biodiesel forage humblebrag mixtape swag umami keffiyeh JOMO same.
            Pug roof party raw denim direct trade palo santo synth cliche fanny
            pack tilde readymade tofu.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} className="img" alt="woman and the browser" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
