import { TYPES } from "../types/types.js";
export const uiReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case TYPES.uiStartLoading:
      return {
        loading: true,
      };
    case TYPES.uiFinishLoading:
      return {
        loading: false,
      };
    default:
      return state;
  }
};
