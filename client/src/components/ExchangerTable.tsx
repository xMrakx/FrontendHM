import CurrentExchangeTable from "./CurrentEchangeTable/CurrentExchangeTable";
import DateTimeString from "./DateTimeString/DateTimeString";
import MoreAboutWidget from "./MoreAboutWidget/MoreAboutWidget";
import SelectExchangeTable from "./SelectEcxhangeTable/SelectExchangeTable";
import styles from "./ExchangerTable.module.css";

import { moreAboutWidgetMock } from "./MoreAboutWidget/MoreAboutWidgetMock";

function ExchangerTable() {
  return (
    <div className={styles.container}>
      <div className={styles.table}>
        <CurrentExchangeTable />
        <DateTimeString />
        <SelectExchangeTable />
        <MoreAboutWidget {...moreAboutWidgetMock} />
      </div>
    </div>
  );
}

export default ExchangerTable;
