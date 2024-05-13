import { configureStore } from "@reduxjs/toolkit";
import webRtcSlice from "./webRtc/slice";

const store = configureStore({
  reducer: {
    webRtc: webRtcSlice,
  },
});

export type RootStateType = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;

export default store;
