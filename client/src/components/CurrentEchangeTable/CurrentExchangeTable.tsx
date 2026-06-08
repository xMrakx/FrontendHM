import styles from "./CurrentExchangeTable.module.scss";

function CurrentExchangeTable() {
  return (
    <div className={styles.container}>
      <span className={styles.from}>1 Polish zloty is</span>
      <span className={styles.to}>0.99 Japanese yen</span>
    </div>
  );
}

export default CurrentExchangeTable;
