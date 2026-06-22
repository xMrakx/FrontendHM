import CurrentExchangeTable from "../CurrentEchangeTable/CurrentExchangeTable";
import DateTimeString from "../DateTimeString/DateTimeString";
import MoreAboutWidget from "../MoreAboutWidget/MoreAboutWidget";
import SelectExchangeTable from "../SelectExchangeTable/SelectExchangeTable";
import styles from "./ExchangerTable.module.scss";
import { useEffect, useState } from "react";
import { MOCK_CURRENCIES, MOCK_PRICE_CHANGES } from "../../mocks/mocks";
import type { Currency } from "../../models/currency";
import SwapButton from "../SwapButton/SwapButton";

function ExchangerTable() {

  const [fromCurrency, setFromCurrency] = useState<Currency>(MOCK_CURRENCIES[0]);
  const [toCurrency, setToCurrency] = useState<Currency>(MOCK_CURRENCIES[1]);
  const [amount, setAmount] = useState<number>(1);
  const [result, setResult] = useState<number>(0);

  const getRate = (from: string, to: string): number => {
    return MOCK_PRICE_CHANGES[from]?.[to]?.price ?? 0;
  };

  const getAnotherCurrency = (currencyCode: string): Currency => {
    const anotherCurrency = MOCK_CURRENCIES.find((c) => c.code !== currencyCode);
    return anotherCurrency ?? MOCK_CURRENCIES[0];
  };

  const handleFromChange = (newFrom: Currency) => {
    if (newFrom.code === toCurrency.code) {
      const anotherCurrency = getAnotherCurrency(newFrom.code);
      setToCurrency(anotherCurrency);
    }
    setFromCurrency(newFrom)
  };

  const handleToChange = (newTo: Currency) => {
    if (newTo.code === fromCurrency.code) {
      const anotherCurrency = getAnotherCurrency(newTo.code);
      setFromCurrency(anotherCurrency);
    }
    setToCurrency(newTo);
  }

  const handleOnAmountChange = (newAmount: number) => {
    setAmount(newAmount);
  }

  const handleSwap = () => {
    const from = fromCurrency;
    const to = toCurrency;
    setFromCurrency(to);
    setToCurrency(from);
  };

  useEffect(() => {
    const rate = getRate(fromCurrency.code, toCurrency.code);
    setResult(amount * rate);
  }, [fromCurrency, toCurrency, amount]);

  return (
    <div className={styles.container}>
      <div className={styles.table}>
        <CurrentExchangeTable
          fromName={fromCurrency.name}
          toName={toCurrency.name}
          rate={getRate(fromCurrency.code, toCurrency.code)} />
        <DateTimeString />
        <SwapButton onSwap={handleSwap} />
        <SelectExchangeTable
          fromCurrency={fromCurrency}
          toCurrency={toCurrency}
          amount={amount}
          result={result}
          onFromChange={handleFromChange}
          onToChange={handleToChange}
          onAmountChange={handleOnAmountChange}
          currencies={MOCK_CURRENCIES} />
        <MoreAboutWidget
          fromCode={fromCurrency.code}
          fromName={fromCurrency.name}
          fromSymbol={fromCurrency.symbol}
          fromDescription={fromCurrency.description}
          toCode={toCurrency.code}
          toName={toCurrency.name}
          toSymbol={toCurrency.symbol}
          toDescription={toCurrency.description} />
      </div>
    </div>
  );
}

export default ExchangerTable;
