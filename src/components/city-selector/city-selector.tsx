import { useMemo } from "react";
import {
  StyledCities,
  StyledCitySelector,
  StyledTitle,
  StyledType,
  StyledTypeItem,
  StyledTypeList,
  StyledTypeWord,
} from "@/components/city-selector/styled";
import { TCity } from "@/constants/city-list";
import { CityService } from "@/services/city.service";

interface ICitySelectorProps {
  onSelect(city: TCity): void;
}

export function CitySelector(props: ICitySelectorProps) {
  const cityList = useMemo(() => CityService.getList(), []);

  return (
    <StyledCitySelector>
      <StyledTitle variant="h6">Выберете город</StyledTitle>

      <StyledCities>
        {cityList.map((cityNamespace) => {
          return (
            <StyledType
              key={`${cityNamespace.word}_${cityNamespace.list.length}`}
            >
              <StyledTypeWord variant="subtitle1">
                {cityNamespace.word.toUpperCase()}
              </StyledTypeWord>
              <StyledTypeList>
                {cityNamespace.list.map((cityName) => (
                  <StyledTypeItem
                    key={cityName.name}
                    onClick={() => props.onSelect(cityName)}
                  >
                    {cityName.name}
                  </StyledTypeItem>
                ))}
              </StyledTypeList>
            </StyledType>
          );
        })}
      </StyledCities>
    </StyledCitySelector>
  );
}