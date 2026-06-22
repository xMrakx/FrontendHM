import type { Currency } from "../models/currency";
import type { PriceChange } from "../models/priceChange";
import currencies from "./2_hw_mock_currencies.json";
import priceChanges from "./2_hw_mock_price_changes.json";

export const MOCK_CURRENCIES: Currency[] = currencies as Currency[];
export const MOCK_PRICE_CHANGES: Record<string, Record<string, PriceChange>> = priceChanges as Record<string, Record<string, PriceChange>>;