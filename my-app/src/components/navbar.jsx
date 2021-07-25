import Profil from '../source/profil.png';

export default function Head() {
  return (
    <>
      <div id="head-profil">
        <img src={Profil} id="profil" alt="" />
      </div>
      <hr />
      <div id="head-navbar">
        <a href="http://localhost:3001/" className="navbar">
          Home
        </a>
        <a href="#about" className="navbar">
          About
        </a>
        <a href="#my-project" className="navbar">
          My Project
        </a>
        <a href="#quotes" className="navbar">
          Quote
        </a>
        <a href="#contact" className="navbar">
          Kontak
        </a>
      </div>
      <div id="head-quotes">
        <div className="head-quotes1">
          <h1>The World Should Look At My Portfolio</h1>
        </div>
        <h4>
          A Multi-Talented Computer | Fullstack Developer | Software Engineer
        </h4>
      </div>
    </>
  );
}
