import { atom } from "recoil";

export const selectedMenuState = atom<string>({
  key: "selectedMenuState",
  default: "characters",
});

export const selectedChatState = atom<number>({
  key: "selectedChatState",
  default: -1,
});
