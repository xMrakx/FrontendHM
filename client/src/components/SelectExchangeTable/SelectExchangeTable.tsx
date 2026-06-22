import type { Currency } from "../../models/currency";
import SelectCurrencyBar from "../SelectEcxhangeTable/SelectCurrencyBar";

interface SelectExchangeTableProps {
  fromCurrency: Currency;
  toCurrency: Currency;
  amount: number;
  result: number;
  onFromChange: (currency: Currency) => void;
  onToChange: (currency: Currency) => void;
  onAmountChange: (currency: number) => void;
  currencies: Currency[];
}

function SelectExchangeTable({
  fromCurrency,
  toCurrency,
  amount,
  result,
  onFromChange,
  onToChange,
  onAmountChange,
  currencies
}: SelectExchangeTableProps) {

  return (
    <div>
      <SelectCurrencyBar
        label={amount}
        code={fromCurrency.code}
        onValueChange={(code) => {
          const newCurr = currencies.find(c => c.code === code);
          if (newCurr) onFromChange(newCurr);

        }}
        currencies={currencies}
        onEdit={onAmountChange}
        ariaLabel="From currency"
        inputTestId="amount-input"
        selectTestId="from-currency-select" />
      <SelectCurrencyBar
        label={result}
        code={toCurrency.code}
        onValueChange={(code) => {
          const newCurr = currencies.find(c => c.code === code);
          if (newCurr) onToChange(newCurr);
        }}
        currencies={currencies}
        ariaLabel="To currency"
        inputTestId="result-input"
        selectTestId="to-currency-select" />
    </div>
  );
}

export default SelectExchangeTable;
