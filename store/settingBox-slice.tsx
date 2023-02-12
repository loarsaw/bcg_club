import { createSlice } from "@reduxjs/toolkit";
import { ISettingsBox } from "@/lib/types/settingBox";

const initialState: ISettingsBox = {
  isOpen: false,
};

const settingBoxSlice = createSlice({
  name: "settingsBox",
  initialState,
  reducers: {
    openSettingsBox(state) {
      state.isOpen = true;
    },
    closeSettingBox(state) {
      state.isOpen = false;
    },
    toggleSettingBox(state) {
      state.isOpen = !state.isOpen;
    },
  },
});

export const settingBoxActions = settingBoxSlice.actions;
export default settingBoxSlice.reducer;
