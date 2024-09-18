import React from 'react'
import { useSelector } from 'react-redux';
import { Todo } from './Todo';


export const Todos = ({handleDelete, handleChecked}) => {

    const posts = useSelector((state) => state.posts);

  return (
    <>
    {
    posts.map((item) => {
          return (
           <Todo 
           id = {item.id}
           checking = {item.checking}
           completed = {item.completed}
           deleting = {item.deleting}
           handleDelete = {handleDelete}
           handleChecked = {handleChecked}
           title={item.title}
           />
          );
        })
    }
    </>
  )
}
