import { TCity } from "@/constants/city-list";

export type TDesignatedValue = {
  word: string;
  list: TCity[];
};

export interface CityGetListResultDto extends Array<TDesignatedValue> {}