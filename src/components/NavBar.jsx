import "./NavBar.css";

const NavBar = () => {
   return (
      <>
         <nav className="nav_container">
            <a className="active" href="">
               HOME
            </a>
            <a href="">SKILLS</a>
            <a href="">WORK</a>
            <a href="">CONTACT</a>
         </nav>
      </>
   );
};

export default NavBar;
