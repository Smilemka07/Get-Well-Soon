import "./Calendar.css";
function Calendar() {
  return (
   <div id="box1">
    <div className="class-calendar">
      <div className="header">
        <button id="prevBtn">
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <div className="monthYear" id="monthYear"></div>
        <button id="nextBtn">
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>

      <div class="days">
        <div className="day">Mon</div>
        <div className="day">Tue</div>
        <div className="day">Wed</div>
        <div className="day">Thu</div>
        <div className="day">Fri</div>
        <div className="day">Sat</div>
        <div className="day">Sun</div>
      </div>

      <div className="dates" id="dates"></div>
    </div>
    </div>
  );
}
export default Calendar;
