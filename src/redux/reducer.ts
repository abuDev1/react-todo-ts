import { TodoAction, TodoActionTypes, initialStateTyped } from "../types";

const initialState: initialStateTyped = {
  todos: [],
  loading: false,

  users: [],
  loadingUsers: false,
};

export const reducer = (state = initialState, action: TodoAction) => {
  switch (action.type) {
    case TodoActionTypes.FETCH_TODOS:
      return {
        ...state,
        loading: true,
      };

    case TodoActionTypes.FETCH_TODOS_SUCCESS:
      return {
        ...state,
        todos: action.payload,
        loading: false,
      };

    case TodoActionTypes.FETCH_DELETE:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              deleting: true,
            };
          }
          return todo;
        }),
      };

    case TodoActionTypes.FETCH_DELETE_FULFILLED:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case TodoActionTypes.FETCH_CHECK:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              checking: true,
            };
          }
          return todo;
        }),
      };

    case TodoActionTypes.FETCH_CHECK_SUCCESS:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              completed: !todo.completed,
              checking: false,
            };
          }
          return todo;
        }),
      };

    case TodoActionTypes.FETCH_LOAD:
      return {
        ...state,
        loadingUsers: true,
      };

    case TodoActionTypes.FETCH_LOAD_SUCCESS:
      return {
        ...state,
        users: action.payload,
        loadingUsers: false,
      };

    default:
      return state;
  }
};
