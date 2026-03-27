import "./Home.css";
import { images } from "./assets/images";
function Home() {
  return (
    <div class="parent">
      <div id="nav">
        <h1>GSW.</h1>
        <a href="./calendar.html">
          <img src={images.calendar} alt="Calendar" class="calendar" />
        </a>
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
