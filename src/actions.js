import React from 'react'

export const loadPosts = () => {
  return (dispatch) => {
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
