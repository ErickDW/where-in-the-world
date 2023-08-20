import { Languages, flagsInterface } from "./interfaces";

export const formatNumberWithCommas = (num: number): string => {
  return num.toLocaleString("en-US");
};

export const getRandomSubset = (
  bigArray: flagsInterface[],
  subsetSize: number = 8
): flagsInterface[] => {
  const shuffledArray = bigArray.slice().sort(() => Math.random() - 0.5);
  const subset = shuffledArray.slice(0, subsetSize);
  return subset;
};

export const getSubset = (
  bigArray: flagsInterface[],
  subsetSize: number = 8
): flagsInterface[] => {
  const subset = bigArray.slice(0, subsetSize);
  return subset;
};

export const concatenateStrings = (languages: Languages): string => {
  const lengs: string[] = [];
  Object.entries(languages).map(([languageCode, language]) => {
    lengs.push(language);
  });
  return lengs.join(", ");
};

export const isNone = (str: any): string => {
  return str ? str : "None";
};
