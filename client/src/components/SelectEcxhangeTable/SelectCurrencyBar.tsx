import styles from "./SelectCurrencyBar.module.scss";

interface SelectCurrencyBarProps {
  label: string;
  value: string;
}

function SelectCurrencyBar({ label, value }: SelectCurrencyBarProps) {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <line className={styles.separator} />
      <select className={styles.selector} value={value}>
        <option>PLN</option>
        <option>JPY</option>
      </select>
    </div>
  );
}

export default SelectCurrencyBar;
