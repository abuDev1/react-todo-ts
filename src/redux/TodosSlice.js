import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  loading: false,
};

export const loadTodos = createAsyncThunk(
  "load/todos/start", 
  async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");

  return response.json();
});

export const removeTodo = createAsyncThunk(
  "delete/todos/start", 
  async ({id}) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`,
    {
      method: "DELETE",
    }
  );

  return response.json();
});


export const updateCheck = createAsyncThunk(
    "check/todos/start",
    async({id, completed}) => {
        const response = await 
              fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                method: "PATCH",
                body: JSON.stringify({
                  completed: !completed,
                }),
                headers: {
                  "Content-type": "application/json; charset=UTF-8",
                },
              })
    
    return response.json()
    }
)


export const TodoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadTodos.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = action.payload;
      })
      .addCase(removeTodo.pending, (state, action) => {
        const {id} = action.meta.arg
        state.todos = state.todos.map(todo => {
            if (todo.id === id) {
              return {
                ...todo,
                deleting: true
              }
            }
            return todo
          })
      })
      .addCase(removeTodo.fulfilled, (state, action) => {
        state.todos = state.todos.filter((todo) => todo.id !== action.payload.id)
      })
      .addCase(updateCheck.pending, (state, action) => {
          const {id} = action.meta.arg
          state.todos = state.todos.map(todo => {
            if (todo.id === id) {
              return {
                ...todo,
                checking: true
              }
            }
            return todo
          })
      })
      .addCase(updateCheck.fulfilled, (state, action) => {
        state.todos = state.todos.map((todo) => {
            if (todo.id === action.payload.id) {
              return {
                ...todo,
                completed: !todo.completed,
                checking: false
              }
            }
            return todo;
          })
        })
  },
});

export const {} = TodoSlice.actions;

export default TodoSlice.reducer;

// export const loadtodos = () => {
//     return (dispatch) => {
//       dispatch({ type: "load/todos/start" });

//       fetch("https://jsonplaceholder.typicode.com/todos")
//         .then((response) => response.json())
//         .then((json) => {
//           dispatch({
//             type: "load/todos/fulfilled",
//             payload: json,
//           });
//         });
//     };
//   };

//   export const removetodo = (id) => {
//     return (dispatch) => {
//       dispatch({
//         type: "delete/todos/start",
//         payload: id
//       });

//       fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
//         method: "DELETE",
//       })
//         .then((response) => response.json())
//         .then(() => {
//           dispatch({
//             type: "delete/todo/fulfilled",
//             payload: id,
//           });
//         });
//     };
//   };





// export const updateCheck = (id, completed) => {
//     return (dispatch) => {
//       dispatch({ 
//         type: "check/todos/start", 
//         payload: id });
  
//       fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
//         method: "PATCH",
//         body: JSON.stringify({
//           completed: !completed,
//         }),
//         headers: {
//           "Content-type": "application/json; charset=UTF-8",
//         },
//       })
//         .then((response) => response.json())
//         .then(() => {
//           dispatch({
//             type: "check/load/success",
//             payload: id,
//           });
//         });
//     };
//   };