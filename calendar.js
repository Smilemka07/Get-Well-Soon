const monthYearElement = document.querySelector("#monthYear");
const dateElement = document.querySelector(".dates");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let currentDate = new Date();

const updateCalendar = () => {
  const currentYear = currentDate.getFullYear();
  let currentMonth = currentDate.getMonth();

  const firstDay = new Date(currentYear, currentMonth, 1);
  const lastDay = new Date(currentYear, currentMonth + 1, 0);

  const totalDays = lastDay.getDate();
  const firstDayIndex = firstDay.getDay();  // Sunday = 0
  const lastDayIndex = lastDay.getDay();

  const monthYearString = currentDate.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });
  monthYearElement.textContent = monthYearString;

  let datesHTML = "";

  // Shift Sunday (0) to the end to make Monday the first day
  const correctedFirstDayIndex = firstDayIndex === 0 ? 6 : firstDayIndex - 1;
  const correctedLastDayIndex = lastDayIndex === 0 ? 6 : lastDayIndex - 1;

  // Previous month's dates
  for (let i = correctedFirstDayIndex; i > 0; i--) {
    const prevDate = new Date(currentYear, currentMonth, 0 - i + 1);
    datesHTML += `<div class="date inactive">${prevDate.getDate()}</div>`;
  }

  // Current month's dates
  for (let i = 1; i <= totalDays; i++) {
    const date = new Date(currentYear, currentMonth, i);
    const isToday = date.toDateString() === new Date().toDateString();
    const activeClass = isToday ? "active" : "";
    datesHTML += `<div class="date ${activeClass}">${i}</div>`;
  }

  // Next month's dates
  for (let i = 1; i < 7 - correctedLastDayIndex - 1; i++) {
    const nextDate = new Date(currentYear, currentMonth + 1, i);
    datesHTML += `<div class="date inactive">${nextDate.getDate()}</div>`;
  }

  dateElement.innerHTML = datesHTML;
};

prevBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  updateCalendar();
});

nextBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  updateCalendar();
});

updateCalendar();

