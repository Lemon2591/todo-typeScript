import { createSlice } from "@reduxjs/toolkit";

export interface IValuePost {
  data: [
    {
      name: string;
      price: string;
      descriptions: string;
    }
  ];
}
const initialState: IValuePost = {
  data: [
    {
      name: "",
      price: "",
      descriptions: "",
    },
  ],
};

export const dataPost = createSlice({
  name: "apiPostValue",
  initialState,
  reducers: {
    setDataPost(state, action) {
      state.data = action.payload || [];
    },
  },
});

export const { setDataPost } = dataPost.actions;

export default dataPost.reducer;
