import { AxiosPromise } from "axios";
import { CarsGetListParamsDto } from "@/dto/cars/cars-get-list-params.dto";
import { CarsGetListResponseDto } from "@/dto/cars/cars-get-list-response.dto";
import { httpClient } from "@/utils/axios";

export default class CarService {
  public static getList(
    params: CarsGetListParamsDto,
  ): AxiosPromise<CarsGetListResponseDto> {
    return httpClient.get<CarsGetListResponseDto>("/car-search", {
      params,
    });
  }
}