import React, { FC, useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { CurrencyArrayType, ExchangeRatesTypes } from "../../../types/currencyTypes";
import { CurrencyBannerDisplay } from "./CurrencyBannerDisplay/CurrencyBannerDisplay";

export const CurrencyBanner: FC = () => {
  const initialState: ExchangeRatesTypes = {
    EUR: null,
    PLN: null,
    GBP: null,
    CHF: null,
  };

  const [exchangeRates, setExchangeRates] = useState(initialState);
  const [date, setDate] = useState("");
  const [error, setError] = useState("");
  const today = moment(date).format("MMM Do YY");

  const fetchData = async () => {
    const apiKey = process.env.REACT_APP_EXCHANGE_RATE_API_KEY;
    const baseUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;
    await axios
      .get(baseUrl)
      .then((res) => {
        const data = res.data;
        const currentDate = data.time_last_update_utc;
        const rates = data.conversion_rates;
        setExchangeRates(rates);
        setDate(currentDate);
      })
      .catch((error) => setError(error.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const currencyArray: CurrencyArrayType = [
    {
      currencySymbol: "EUR",
      currencyRate: exchangeRates.EUR,
    },
    {
      currencySymbol: "PLN",
      currencyRate: exchangeRates.PLN,
    },
    {
      currencySymbol: "GBP",
      currencyRate: exchangeRates.GBP,
    },
    {
      currencySymbol: "CHF",
      currencyRate: exchangeRates.CHF,
    },
  ];
  const doubledLoopArray = [currencyArray, currencyArray];

  return (
    <CurrencyBannerDisplay today={today} currencyArrays={doubledLoopArray} errorMessage={error} />
  );
};
