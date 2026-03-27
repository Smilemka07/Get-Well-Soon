import "./Home.css";
import {Link} from "react-router-dom";
import { images } from "./assets/images";
function Home() {
  return (
    <div class="parent">
      <div id="nav">
        <h1>GSW.</h1>
        <Link to="/Calendar" ><img src={images.calendar1} alt="Calendar" class="calendar" /></Link>
      </div>
      <div id="box">
        <div id="listForm">
          <div class="formBanner">
            <h2>Get well soon!</h2>
            <img
              src={images.Capsules}
              alt="Capsules"
              class="capsules imageHalf"
            />
            <img
              src={images.capsulesfull}
              alt="Capsules"
              class="capsules imageFull"
            />
          </div>
          <ul id="container" class="invisible-scrollbar"></ul>
          <button id="add">
            <i class="fas fa-plus"></i> New Med
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
