import { wrapper } from "../html/htmlElements.js";
export const updateBackgroundColor = (color) => {
  wrapper.style.backgroundColor = `${color}`;
  wrapper.style.color = `${color}`;
};
