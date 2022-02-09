import "./Hero.css";
import NavBar from "./NavBar";
import Presentation from "./Presentation";
import Description from "./Description";

const Hero = () => {
   return (
      <>
         <section className="home_container">
            <NavBar />
            <Presentation />
            <Description />
         </section>
      </>
   );
};

export default Hero;
