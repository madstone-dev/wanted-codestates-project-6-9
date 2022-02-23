import { configureStore } from "@reduxjs/toolkit";
import reviewReducer from "./reducers/reviewReducer";

export const store = configureStore({
  reducer: {
    reviews: reviewReducer,
  },
});
