import { configureStore } from "@reduxjs/toolkit";
import settingBoxReducer from "./settingBox-slice";
import megaMenuReducer from "./megaMenu-slice";
import activeMenuItemReducer from "./activeMenuItem-slice";
const store = configureStore({
  reducer: {
    settingBox: settingBoxReducer,
    megaMenu: megaMenuReducer,
    activeMenuItem: activeMenuItemReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
