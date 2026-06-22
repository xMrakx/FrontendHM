import { cleanup, render, screen } from "@testing-library/react";
import { describe, expect, it, afterEach } from "vitest";
import ExchangerTable from "./ExchangerTable";
import { MOCK_CURRENCIES, MOCK_PRICE_CHANGES } from "../../mocks/mocks";
import userEvent from "@testing-library/user-event";

afterEach(() => {
    cleanup();
});

describe("ExchangerTable", () => {
    it("Рендер селектов и полей с мок данными", () => {
        render(<ExchangerTable />);
        screen.debug();
        const fromSelect = screen.getByTestId("from-currency-select");
        const toSelect = screen.getByTestId("to-currency-select");

        expect(fromSelect).toHaveValue(MOCK_CURRENCIES[0].code);
        expect(toSelect).toHaveValue(MOCK_CURRENCIES[1].code);
    });

    it("пересчет при изменеии суммы", async () => {
        const user = userEvent.setup();
        render(<ExchangerTable />);

        const mockCurr = MOCK_CURRENCIES;
        const mockChange = MOCK_PRICE_CHANGES;

        const [amountInput] = screen.getAllByTestId("amount-input");
        await user.clear(amountInput);
        await user.type(amountInput, '5');

        const rate = mockChange[mockCurr[0].code]?.[mockCurr[1].code]?.price ?? 0;
        const expectResult = 5 * rate;
        const [resultInput] = screen.getAllByTestId("result-input");

        expect(resultInput).toHaveValue(expectResult);
    });

    it("Смена валюты TO при выборе одинаковых", async () => {
        const user = userEvent.setup();
        render(<ExchangerTable />);

        const fromSelect = screen.getByTestId("from-currency-select") as HTMLSelectElement;
        const toSelect = screen.getByTestId("to-currency-select") as HTMLSelectElement;

        const initialFrom = fromSelect.value;
        const initialTo = toSelect.value;
        expect(initialFrom).not.toBe(initialTo);

        await user.selectOptions(toSelect, initialFrom);

        expect(fromSelect.value).toBe(initialTo);
        expect(toSelect.value).toBe(initialFrom);
    })


    it("Смена валюты FROM при выборе одинаковых", async () => {
        const user = userEvent.setup();
        render(<ExchangerTable />);

        const fromSelect = screen.getByTestId("from-currency-select") as HTMLSelectElement;
        const toSelect = screen.getByTestId("to-currency-select") as HTMLSelectElement;

        const initialFrom = fromSelect.value;
        const initialTo = toSelect.value;
        expect(initialFrom).not.toBe(initialTo);

        await user.selectOptions(fromSelect, initialTo);

        expect(fromSelect.value).toBe(initialTo);
        expect(toSelect.value).toBe(initialFrom);
    })
});