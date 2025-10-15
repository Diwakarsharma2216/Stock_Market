declare module 'react-select-country-list' {
  export type CountryOption = {
    label: string;
    value: string;
  };

  export interface CountryListApi {
    getData: () => CountryOption[];
  }

  export default function countryList(): CountryListApi;
}


