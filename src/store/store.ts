import { atom } from "jotai";

interface UserBasicInfo {
  firstName: string;
  lastName: string;
  middleName?: string; // Optional if not every user has a middle name
  email: string;
  contactNo: string;
}

export interface User extends UserBasicInfo {
  picture?: string;
  name?: string;
}

export interface User extends UserBasicInfo {
  picture?: string;
}

export const userAtom = atom<User>({
  firstName: "",
  lastName: "",
  email: "",
  contactNo: "",
});
export const isDarkModeAtom = atom<boolean>(true);
