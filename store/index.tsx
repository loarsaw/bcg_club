import { configureStore } from "@reduxjs/toolkit";
import settingBoxReducer from "./settingBox-slice";
import megaMenuReducer from "./megaMenu-slice";
const store = configureStore({
  reducer: {
    settingBox: settingBoxReducer,
    megaMenu: megaMenuReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
