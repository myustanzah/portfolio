import img from '../source/fotoku.jpg';

function About() {
  return (
    <>
      <div id="about">
        <div className="projectHead">
          <div>
            <p>========================================</p>
          </div>
          <div className="project-judul">
            <h4>About Me</h4>
          </div>
          <div>
            <p>========================================</p>
          </div>
        </div>
        <div id="aboutMe">
          <div id="aboutMe-1">
            <h1>My Profile</h1>
            <p style={{ textAlign: 'center' }}>
              Hello !, My name is Muhammad Yustanzah Qurniawan. You can call me
              Yus. I was born in Tanjung pandan, 27th 1997. I love technology
              since childhod. 
            </p>
          </div>
          <div id="aboutMe-2">
            <img src={img} alt="" srcset="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
