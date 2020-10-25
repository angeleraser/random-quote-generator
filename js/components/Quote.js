import { quoteBody, quoteAuthor, quote } from "../html/htmlElements.js";
export const Quote = {
  htmlEl: quote,
  update: (author, body) => {
    quoteAuthor.textContent = author;
    quoteBody.textContent = body;
  },
  displayNone() {
    this.htmlEl.classList.add("display-none");
  },
  show() {
    this.htmlEl.classList.remove("display-none");
  },
  
};
