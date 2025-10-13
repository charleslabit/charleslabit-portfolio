import { MEGAWORLD_PATHS, STACK } from "./megaworld.constant";

export const useMegaWorldViewModel = () => {
  return {
    stack: STACK,
    images: MEGAWORLD_PATHS,
  };
};
