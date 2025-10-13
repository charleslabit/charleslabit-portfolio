import { EXSIGHT_PATHS, STACK } from "./exsight.constant";

export const useExsightViewModel = () => {
  return {
    stack: STACK,
    images: EXSIGHT_PATHS,
  };
};
