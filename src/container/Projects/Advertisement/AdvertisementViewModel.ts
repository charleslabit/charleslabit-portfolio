import { LANDING_PAGES_PATH, VIDEO_EXTENSIONS } from "./advertisement.constant";
export const useAdvertisementViewModel = () => {
  return {
    landingPages: LANDING_PAGES_PATH,
    videoExtensions: VIDEO_EXTENSIONS,
  };
};
