import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    addComment: (state, action) => {
      return [action.payload, ...state];
    },
    removeComment: (state, action) => {},
    updateComment: (state, action) => {},
  },
});

// Action creators are generated for each case reducer function
export const { addComment, removeComment, updateComment } =
  commentSlice.actions;

export default commentSlice.reducer;
