const BASE_URL = `https://api.coinpaprika.com/v1`;

export const fetchCoins = async () => {
  return (await fetch(`${BASE_URL}/coins`)).json();
};

export const fetchCoinInfo = async (coinId: string) => {
  return (await fetch(`${BASE_URL}/coins/${coinId}`)).json();
};

export const fetchCoinPrice = async (coinId: string) => {
  return (await fetch(`${BASE_URL}/tickers/${coinId}`)).json();
};

export const fetchCoinHistory = async (coinId: string) => {
  return (
    await fetch(`https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}`)
  ).json();
};
