import { dispatch } from "../store/index.js";
import { TYPES } from "../types/types.js";
import { uiStartLoading, uiFinishLoading } from "./ui.js";

const setQuote = (author, body) => ({
  type: TYPES.setQuote,
  payload: {
    author,
    body,
  },
});

export const fetchNewQuote = () => {
  return async () => {
    console.log("Fetching quote...");
    dispatch(uiStartLoading());
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    dispatch(setQuote(data.author, data.content));
    dispatch(uiFinishLoading());
    console.log("Fetching quote done!");
  };
};
