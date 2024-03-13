import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface updateSideNav {
  sidebarShow: boolean;
}

const initialState: updateSideNav = {
  sidebarShow: false,
};

export const updateSideNavSlice = createSlice({
  name: "sidebarShow",
  initialState,
  reducers: {
    updateSideNav: (state, action: PayloadAction<boolean>) => {
      state.sidebarShow = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateSideNav } = updateSideNavSlice.actions;

export default updateSideNavSlice.reducer;
