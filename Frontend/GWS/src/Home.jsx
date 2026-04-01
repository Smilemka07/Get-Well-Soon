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

  //Get tasks from db as array, to display on screen
  const [listItems, setListItems] = useState([]);

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:3000/tasks");

    const data = await res.json();

    setListItems(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    // Home page structure
    <div className="parent">
      {/* nav */}
      
      <div id="nav">
        <h1 className="inner">GSW.</h1>
        <Link to="/Calendar">
          <img src={images.calendar1} alt="Calendar" className="calendar" />
        </Link>
      
      </div>

      {/* box in the centre */}
      <div className="inner">
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
              <li key={item.serial_number}>{item.task_description}</li>
            ))}
          </ul>
          <input
            className="input"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="example: Paracetin-500, 1 tablet - Morning/Night"
          />
          <button disabled={!task.trim()} id="add" onClick={addTask}>
            <i className="fas fa-plus"></i> New Med
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
