export type CurrencyArrayType = { currencySymbol: string; currencyRate: number | null }[];
export type doubledLoopArrayType = { currencySymbol: string; currencyRate: number | null }[][];

export type ExchangeRatesTypes = {
  EUR: number | null;
  PLN: number | null;
  GBP: number | null;
  CHF: number | null;
};
