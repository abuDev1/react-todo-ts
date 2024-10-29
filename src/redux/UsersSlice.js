import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  loadingUsers: false,
};

export const loadUsers = createAsyncThunk(
    "load/users/start",
    async() => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")

        return response.json()
    }
)


export const UsersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(loadUsers.pending, (state) => {
        state.loadingUsers = true
    })
    .addCase(loadUsers.fulfilled, (state, action) => {
        state.users = action.payload
        state.loadingUsers = false
    })
  },
});

export const {} = UsersSlice.actions;

export default UsersSlice.reducer;



// export const loadUsers = () => {
//     return (dispatch) => {
//       dispatch({ type: "load/users/start" });
  
  
//       fetch("https://jsonplaceholder.typicode.com/users")
//         .then((response) => response.json())
//         .then((json) => {
//           dispatch({
//             type: "load/users/fulfilled",
//             payload: json,
//           });
//         });
//     };
//   }