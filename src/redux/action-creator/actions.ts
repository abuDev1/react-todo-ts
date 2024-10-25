import React from "react";
import { Dispatch } from "redux";
import { TodoAction, TodoActionTypes } from "../../types";

export const loadtodos = () => {
  return (dispatch: Dispatch<TodoAction>): void => {
    dispatch({ type: TodoActionTypes.FETCH_TODOS });


    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: TodoActionTypes.FETCH_TODOS_SUCCESS,
          payload: json,
        });
      });
  };
};

export const removetodo = (id: number) => {
  return (dispatch: Dispatch<TodoAction>): void => {
    dispatch({ 
      type: TodoActionTypes.FETCH_DELETE, 
      payload: id
    });

    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((id) => {
        dispatch({
          type: TodoActionTypes.FETCH_DELETE_FULFILLED,
          payload: id,
        });
      });
  };
};

export const updateCheck = (id: number, completed: boolean) => {
  return (dispatch: Dispatch<TodoAction>): void => {
    dispatch({ 
      type: TodoActionTypes.FETCH_CHECK, 
      payload: id });

    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        completed: !completed,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((id: number) => {
        dispatch({
          type: TodoActionTypes.FETCH_CHECK_SUCCESS,
          payload: id,
        });
      });
  };
};


export const loadUsers = () => {
  return (dispatch: Dispatch<TodoAction>): void => {
    dispatch({ type: TodoActionTypes.FETCH_LOAD });


    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: TodoActionTypes.FETCH_LOAD_SUCCESS,
          payload: json,
        });
      });
  };
}
