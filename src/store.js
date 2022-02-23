import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import reviewReducer from "./reducers/reviewReducer"

export const store = configureStore({
  reducer: {
    reviews: reviewReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
