import "./Home.css";
import {Link} from "react-router-dom";
import { images } from "./assets/images";

function Home() {
  return (

    // Home page structure 
    <div className="parent">
      {/* nav */}
      <div id="nav">
        <h1>GSW.</h1>
        <Link to="/Calendar" ><img src={images.calendar1} alt="Calendar" className="calendar" /></Link>
      </div>
      
      {/* box in the centre */}
      <div id="box">
        <div id="listForm">
          <div className="formBanner">
            <h2>Get well soon!</h2>
            <img
              src={images.Capsules}
              alt="Capsules"
              className="capsules imageHalf"
            />
            <img
              src={images.capsulesfull}
              alt="Capsules"
              className="capsules imageFull"
            />
          </div>
          <ul id="container" className="invisible-scrollbar"></ul>
          <button id="add">
            <i className="fas fa-plus"></i> New Med
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
