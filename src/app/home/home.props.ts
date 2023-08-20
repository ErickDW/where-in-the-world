import { flagsInterface } from "@/utils/interfaces";

export type FormatPropsSectionCard = {
  data: flagsInterface[];
};

export type FormatPropsSectionFilters = {
  searchName: (data: string) => void;
  searchRegion: (data: string) => void;
};
