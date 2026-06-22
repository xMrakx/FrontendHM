import type { Currency } from "../../models/currency";
import styles from "./SelectCurrencyBar.module.scss";

interface SelectCurrencyBarProps {
  label: number;
  code: string;
  onValueChange: (code: string) => void;
  currencies: Currency[];
  onEdit?: (value: number) => void;
  ariaLabel?: string;
  inputTestId?: string;
  selectTestId?: string;
}

function SelectCurrencyBar({
  label,
  code,
  onValueChange,
  currencies,
  onEdit,
  ariaLabel = "Currency select",
  inputTestId,
  selectTestId
}: SelectCurrencyBarProps) {

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="number" value={label}
        onChange={(e) => onEdit?.(parseFloat(e.target.value) || 0)}
        data-testid={inputTestId} />
      <line className={styles.separator} />
      <select
        className={styles.selector}
        value={code}
        onChange={(e) => onValueChange(e.target.value)}
        aria-label={ariaLabel}
        data-testid={selectTestId}>
        {currencies.map((currency) => (
          <option key={currency.code} value={currency.code}>
            {currency.code}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectCurrencyBar;
