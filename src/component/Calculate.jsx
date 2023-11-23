import "./Calculate.css";

const Calculate = ({ date, month, year }) => {
  const today = new Date();
  let calcYear = today.getFullYear() - year;
  let calcMonth = today.getMonth() + 1 - month;
  let calcDate = today.getDate() - date;

  if (calcMonth < 0 || (calcMonth === 0 && calcDate < 0)) {
    calcYear--;
    calcMonth += 12;
  }

  if (calcDate < 0) {
    const daysInLastMonth = new Date(
      today.getFullYear(),
      today.getMonth(),
      0
    ).getDate();
    calcMonth--;
    calcDate += daysInLastMonth;
  }

  return (
    <div className="cal">
      <h3>
        <span>{year === "" ? "--" : calcYear}</span> Years
      </h3>
      <h3>
        <span>{month === "" ? "--" : calcMonth}</span> Months
      </h3>
      <h3>
        <span>{date === "" ? "--" : calcDate}</span> Days
      </h3>
    </div>
  );
};

export default Calculate;
