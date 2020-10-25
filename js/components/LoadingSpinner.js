import { loading } from "../html/htmlElements.js";
export const LoadingSpinner = {
  htmlEl: loading,
  displayNone() {
    this.htmlEl.classList.add("display-none");
  },
  show() {
    this.htmlEl.classList.remove("display-none");
  },
};
