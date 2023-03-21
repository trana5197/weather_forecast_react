import Day from "./Day";

import classes from "./Cities.module.css";

// const DUMMY_DATA = [
//   {
//     id: 1,
//     date: "27/11",
//     day: "wed",
//     temperature: "7C",
//     weather: "cloudy",
//   },
// ];

const Cities = (props) => {
  // const { date, temperature, weather } = props;
  return (
    <div className={classes.days}>
      {props.data.map((data, index) => {
        return (
          <Day
            key={index}
            date={data.date}
            // day={data.day}
            temp={data.temperature}
            weather={data.weather}
          />
        );
      })}
    </div>
  );
};

export default Cities;
