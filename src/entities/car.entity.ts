export interface CarEntity {
    "uuid": string;
    "brand": string;
    "model": string;
    "productionYear": number;
    "engineDisplacement": string;
    "enginePower": string;
    "bodyType": string;
    "transmissionLayout": string;
    "transmissionType": string;
    "seatsQuantity": number;
    "engineType": string;
    "rentLocations": number;
    "includedFeatures": string[];
    "photoUrl": string;
    "rentPricePerDay": number;
    "twoDaysDiscount": number | null,
    "threeDaysDiscount": number;
    "fiveDaysDiscount": number | null,
    "weekDiscount": number;
    "twoWeeksDiscount": number;
    "monthDiscount": number | null,
    "homeLocation": {
        "lon": number;
        "lat": number;
        "address": string;
        "city": string;
    },
    "rating": number;
    "rentsQty": number;
    "reviewsQty": number;
    // todo can be issued as a separate entity
    "owner": {
        "id": string;
        "firstName": string;
        "lastName": string;
        "avatar": string | null,
        "labels": string[];
    },
    "cascoFee": number;
    "tags": string[];
    "labels": string[];
    "driversAge": number;
    "drivingExperience": number;
    "pledgePrice": number;
}