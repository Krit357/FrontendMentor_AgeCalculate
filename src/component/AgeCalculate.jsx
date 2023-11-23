import { useState } from "react";
import "./AgeCalculate.css";
import Calculate from "./Calculate";
import arrowIcon from "/icon-arrow.svg?url";

const AgeCalculate = () => {
  const [date, setDate] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handleMonth = (e) => {
    setMonth(e.target.value);
  };

  const handleYear = (e) => {
    setYear(e.target.value);
  };

  return (
    <div className="back">
      <div className="age-back">
        <div className="age-body">
          <form className="age-form">
            <div className="age-form-input">
              <label>
                {date === "" || date > 31 || date < 1 ? (
                  <p style={{ color: "hsl(0, 100%, 67%)" }}>Date</p>
                ) : (
                  <p style={{ color: "hsl(0, 1%, 44%)" }}>Date</p>
                )}
              </label>
              <input
                type="number"
                onChange={handleDate}
                style={{
                  borderColor:
                    date === "" || date > 31 || date < 1
                      ? "hsl(0, 0%, 86%)"
                      : "hsl(0, 1%, 44%)",
                }}
              ></input>
              {date === "" || date > 31 || date < 1 ? (
                <p>Must be valid day</p>
              ) : (
                ""
              )}
            </div>

            <div className="age-form-input">
              <label>
                {month === "" || month > 12 || month < 1 ? (
                  <p style={{ color: "hsl(0, 100%, 67%)" }}>Month</p>
                ) : (
                  <p style={{ color: "hsl(0, 1%, 44%)" }}>Month</p>
                )}
              </label>
              <input
                type="number"
                onChange={handleMonth}
                style={{
                  borderColor:
                    month === "" || month > 12 || month < 1
                      ? "hsl(0, 0%, 86%)"
                      : "hsl(0, 1%, 44%)",
                }}
              ></input>
              {month === "" || month > 12 || month < 1 ? (
                <p>Must be valid month</p>
              ) : (
                ""
              )}
            </div>

            <div className="age-form-input">
              <label>
                {year === "" ? (
                  <p style={{ color: "hsl(0, 100%, 67%)" }}>Year</p>
                ) : (
                  <p style={{ color: "hsl(0, 1%, 44%)" }}>Year</p>
                )}
              </label>
              <input
                type="number"
                onChange={handleYear}
                style={{
                  borderColor:
                    year === "" ? "hsl(0, 0%, 86%)" : "hsl(0, 1%, 44%)",
                }}
              ></input>
              {year === "" ? <p>Must be valid year</p> : ""}
            </div>
          </form>

          <div className="line">
            <div className="line-dash"></div>
            <div className="line-btn">
              <img src={arrowIcon} alt="icon-arrow" />
            </div>
          </div>

          <div>
            <Calculate date={date} month={month} year={year} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgeCalculate;
