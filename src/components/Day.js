import classes from "./Day.module.css";

const Day = (props) => {
  const { date, temp, weather } = props;
  return (
    <div className={classes.day}>
      <p>{date}</p>
      {/* <p>{day}</p> */}
      <p>{temp}</p>
      <p>{weather}</p>
    </div>
  );
};

export default Day;
