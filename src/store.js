import { configureStore } from "@reduxjs/toolkit"
import reviewReducer from "./reducers/reviewReducer"
import commentReducer from "./reducers/commentReducer"

export const store = configureStore({
  reducer: {
    reviews: reviewReducer,
    comments: commentReducer,
  },
})
