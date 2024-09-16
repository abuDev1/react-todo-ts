import React from 'react'

export const loadPosts = () => {
  return (dispatch) => {
    dispatch({type: 'load/posts/start'})

    //По умолчанию fetch делает GET запрос на чтение

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => {
        dispatch({
            type: 'load/posts/fulfilled',
            payload: json
        })
    })
  }
}



export const removePost = (id) => {
  return (dispatch) => {
    dispatch({type: 'delete/posts/start'})

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE'
    })
    .then((response) => response.json())
    .then((json) => {
      dispatch({
        type: 'delete/todo/fulfilled',
        payload: id
      })
    })

  }
}
