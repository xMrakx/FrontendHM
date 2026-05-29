import SelectCurrencyBar from "./SelectCurrencyBar";

function SelectExchangeTable() {
    return (
        <div>
            <SelectCurrencyBar label="1" value="PLN" />
            <SelectCurrencyBar label="0,99" value="JPY" />
        </div>
    )
}

export default SelectExchangeTable;