import { CITY_LIST } from "@/constants/city-list";
import {
  CityGetListResultDto,
  TDesignatedValue,
} from "@/dto/city/city-get-list-result.dto";

export class CityService {
  public static getList(): CityGetListResultDto {
    return CITY_LIST.reduce<CityGetListResultDto>((namespaces, city) => {
      const firstLetterOfName = city.isPrimary
        ? "#"
        : city.name.toLowerCase()[0];
      let cityNamespace: TDesignatedValue = {
        word: firstLetterOfName,
        list: [],
      };

      const foundNamespaceIndex = namespaces.findIndex(
        (_city) => _city.word === firstLetterOfName,
      );
      if (foundNamespaceIndex != -1) {
        cityNamespace = namespaces[foundNamespaceIndex];
      }

      if (
        !cityNamespace.list.find(
          (_city) => _city.name.toLowerCase() === city.name.toLowerCase(),
        )
      ) {
        cityNamespace.list.push(city);

        if (foundNamespaceIndex != -1) {
          namespaces[foundNamespaceIndex] = cityNamespace;
        } else {
          namespaces.push(cityNamespace);
        }
      }

      return namespaces;
    }, []);
  }
}