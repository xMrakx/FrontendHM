import styles from "./CurrentExchangeTable.module.scss";

interface CurrentExchangeTableProps {
  fromName: string;
  toName: string;
  rate: number;
}

function CurrentExchangeTable({ fromName, toName, rate }: CurrentExchangeTableProps) {
  return (
    <div className={styles.container}>
      <span className={styles.from}>1 {fromName} is</span>
      <span className={styles.to}>{rate} {toName}</span>
    </div>
  );
}

export default CurrentExchangeTable;
