import styles from "./DateTimeString.module.scss";

const date = new Date();
const utcString = date.toUTCString().replace(" GMT", " UTC");

function DateTimeString() {
  return <div className={styles.string}>{utcString}</div>;
}

export default DateTimeString;
