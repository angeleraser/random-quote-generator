import {
  newQuoteButton,
  tweetQuoteButton,
} from "../html/htmlElements.js";
import { quoteReducer } from "../reducers/quoteReducer.js";
import { fetchNewQuote } from "../actions/quotes.js";
import { uiReducer } from "../reducers/uiReducer.js";
import { Quote } from "../components/Quote.js";
import { LoadingSpinner } from "../components/LoadingSpinner.js";
import { updateBackgroundColor } from "../components/Wrapper.js";
import { getRandomColor } from "../helpers/helpers.js";
const { createStore, combineReducers, applyMiddleware } = Redux;
const { default: thunk } = ReduxThunk;
const reducers = combineReducers({
  quote: quoteReducer,
  ui: uiReducer,
});
const store = createStore(reducers, applyMiddleware(thunk));
export const { subscribe: onUpdateStore, dispatch } = store;
const updateComponent = () => {
  const { quote, ui } = store.getState();
  const color = getRandomColor();
  if (ui.loading) {
    LoadingSpinner.show();
    Quote.displayNone();
  } else {
    updateBackgroundColor(color);
    tweetQuoteButton.setAttribute(
      "href",
      `https://twitter.com/intent/tweet?text=${
        encodeURI(quote.body) + "- " + quote.author
      }`
    );
    Quote.show();
    Quote.update(quote.author, quote.body);
    LoadingSpinner.displayNone();
  }
};
onUpdateStore(updateComponent);
newQuoteButton.addEventListener("click", () => {
  dispatch(fetchNewQuote());
});
newQuoteButton.click();
