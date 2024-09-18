import React from "react";

export const loadPosts = () => {
  return (dispatch) => {
    dispatch({ type: "load/posts/start" });

    //По умолчанию fetch делает GET запрос на чтение

    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "load/posts/fulfilled",
          payload: json,
        });
      });
  };
};

export const removePost = (id) => {
  return (dispatch) => {
    dispatch({ 
      type: "delete/posts/start", 
      payload: id
    });

    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        dispatch({
          type: "delete/todo/fulfilled",
          payload: id,
        });
      });
  };
};

export const updateCheck = (id, completed) => {
  return (dispatch) => {
    dispatch({ 
      type: "check/posts/start", 
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
      .then(() => {
        dispatch({
          type: "check/load/success",
          payload: id,
        });
      });
  };
};
