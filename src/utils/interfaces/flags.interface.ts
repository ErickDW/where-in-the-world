export interface flagsInterface {
  name: Name;
  flags: Flags;
  population: number
  region: string;
  capital: string [];
  subregion: string;
  tld: string[];
  currencies: CurrenciesContainer;
  languages: Languages;
  borders?: string[];
}

interface Name {
  common: string
  official: string
  nativeName: any
}

interface Flags {
  png: string
  svg: string
  alt?: string
}

interface Currency {
  name: string;
  symbol: string;
}

interface CurrencyData {
  [currencyCode: string]: Currency;
}

interface CurrenciesContainer {
  currencies: CurrencyData;
}

export interface Languages {
  [languageCode: string]: string;
}