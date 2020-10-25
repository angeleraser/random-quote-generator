import { TYPES } from "../types/types.js";
export const quoteReducer = (state = { author: "", quote: "" }, action) => {
  switch (action.type) {
    case TYPES.setQuote:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};
