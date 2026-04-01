import "./Calendar.css";
import { useState } from "react";

function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  // getDate() return int between 1 t 31, depending on the date, the day of month

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };
  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };
const firstDay = new Date(year, month, 1);
  const firstDayIndex = (firstDay.getDay() + 6) % 7;

  return (
    <div id="box1">
      <div className="inner2">
      <div className="class-calendar">
        <div className="header">
          <button id="prevBtn" onClick={prevMonth}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <div className="monthYear">
            {month + 1} / {year}
          </div>
          <button id="nextBtn" onClick={nextMonth}>
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>

        <div className="days">
          <div className="day">Mon</div>
          <div className="day">Tue</div>
          <div className="day">Wed</div>
          <div className="day">Thu</div>
          <div className="day">Fri</div>
          <div className="day">Sat</div>
          <div className="day">Sun</div>
        </div>

        <div className="dates">
          {Array.from({ length: firstDayIndex }).map((_, i) => (
            <div key={"empty-" + i}></div>
          ))}
          {Array.from({ length: daysInMonth }, (_, i) => (
            <div key={i} className="date">
              {i + 1}
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}
export default Calendar;
