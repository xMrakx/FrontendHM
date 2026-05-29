import styles from "./DateTimeString.module.scss";

function DateTimeString() {
    const date = new Date();
    const utcString = date.toUTCString().replace(' GMT', ' UTC');

    return <div className={styles.string}>{utcString}</div>
};

export default DateTimeString;