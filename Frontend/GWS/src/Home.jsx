import "./Home.css";
import { Link } from "react-router-dom";
import { images } from "./assets/images";
import { useState, useEffect } from "react";

function Home() {
  //put tasks in database
  const [task, setTask] = useState("");
  const addTask = async () => {
    await fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        task_description: task,
      }),
    });
    setTask("");
  };

  //Get tasks to display on screen
  const listItems = [1, 2, 3, 4, 5, 6, 7, 8, 2, 3, 4, 5, 6, 7, 8];
  return (
    // Home page structure
    <div className="parent">
      {/* nav */}
      <div id="nav">
        <h1>GSW.</h1>
        <Link to="/Calendar">
          <img src={images.calendar1} alt="Calendar" className="calendar" />
        </Link>
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
          <ul id="container" className="invisible-scrollbar">
            {listItems.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
          <input className="input" value={task} onChange={(e) => setTask(e.target.value)} placeholder="example: Paracetin-500, 1 tablet - Morning/Night" />
          <button id="add" onClick={addTask}>
            <i className="fas fa-plus"></i> New Med
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
