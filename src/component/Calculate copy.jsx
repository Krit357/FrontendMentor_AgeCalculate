import "./Calculate.css";

const Calculate = ({ date, month, year }) => {
  const today = new Date();
  const clacYear = today.getFullYear() - year;
  const calcMonth = 12 - month;
  const calcDate = today.getDate() - date;

  return (
    <div className="cal">
      <h3>
        <span>{year === "" ? "--" : clacYear}</span> Years
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
