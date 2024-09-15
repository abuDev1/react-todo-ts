import React from 'react'

export const loadPosts = () => {
  return (dispatch) => {
    dispatch({type: 'load/posts/start'})

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
