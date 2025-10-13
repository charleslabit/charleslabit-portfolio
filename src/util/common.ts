export const getYearsOfExperience = (startYear = 2018): number =>
  new Date().getFullYear() - startYear;
