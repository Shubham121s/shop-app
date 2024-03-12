const { createSlice } = require("@reduxjs/toolkit");

// action.payload used to push passed parameter/value in function

const CartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add: (state, action) => {
      // pushing item in array
        state.push(action.payload)
    },
    remove: (state,action) => {
      // removing the passed product by using product id
        return state.filter((item) => item.id !== action.payload)
    },
  },
});

export const { add, remove } = CartSlice.actions;
export default CartSlice.reducer;
