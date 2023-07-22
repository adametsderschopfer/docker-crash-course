import {CarEntity} from "@/entities/car.entity";

export interface CarsGetListResponseDto {
    data: CarEntity[],
    meta: {
        bounds: {
            ne: {
                lat: number
                lon: number
            },
            sw: {
                lat: number
                lon: number
            }
        };
        maxPrice: number;
        minPrice: number;
        resultsQuantity: string;
    }
}