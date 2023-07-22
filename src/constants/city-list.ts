export type TCity = {
  name: string;
  isPrimary?: boolean;

  coords: {
    lat: number;
    lon: number;
  };
};

export const CITY_LIST: TCity[] = [
  {
    name: "Москва",
    isPrimary: true,
    coords: {
      lat: 1,
      lon: 2,
    },
  },
  {
    name: "Санкт-Петербург",
    isPrimary: true,
    coords: {
      lat: 1,
      lon: 2,
    },
  },
  {
    name: "Екатеринбург",
    coords: {
      lat: 1,
      lon: 2,
    },
  },
  {
    name: "Есентуки",
    coords: {
      lat: 1,
      lon: 2,
    },
  },
  {
    name: "Краснодар",
    coords: {
      lat: 1,
      lon: 2,
    },
  },
  {
    name: "Калининград",
    coords: {
      lat: 1,
      lon: 2,
    },
  },
];
