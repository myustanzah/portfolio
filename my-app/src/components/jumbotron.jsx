import img1 from '../source/jum1.jpg';
import img2 from '../source/jum2.jpg';
import img3 from '../source/jum3.jpg';

export default function Body() {
  return (
    <>
      <div id="jumbotron" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100 h-500" alt="#" />
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100 h-500" alt="#" />
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100 h-500" alt="#" />
          </div>
        </div>
      </div>
    </>
  );
}
