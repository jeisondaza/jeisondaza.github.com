import NavBar from "./NavBar";
import "./Hero.css";

const Hero = () => {
   return (
      <>
         <section className="home_container">
            <NavBar />
            <figure className="home_main">
               <img className="home_img" src="src/assets/meBG.png" alt="me" />
               <figcaption>
                  <h1 className="home_title">Jeison Daza</h1>
                  <h2 className="home_subtitle">Front-end Developer</h2>
               </figcaption>
            </figure>
            <article className="home_bio">
               <p className="home_paragraph">
                  I’m a 24 year old self-taught with 2 years of experience
                  designing and building landing pages and web apps.
               </p>
               <p className="home_paragraph">
                  I strive for the results of my work to be products that are
                  enjoyable to use and that are written with code that’s easy to
                  maintain and easy to understand.
               </p>
            </article>
         </section>
      </>
   );
};

export default Hero;
