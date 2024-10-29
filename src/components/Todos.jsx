import React from 'react'
import { useSelector } from 'react-redux';
import { Todo } from './Todo';


export const Todos = ({handleDelete, handleChecked}) => {

    const todos = useSelector((state) => state.todos.todos);

    const users = useSelector((state) => state.users.users)
  return (
    <>
    {
    todos.map((item) => {
          return (
           <Todo 
           id = {item.id}
           checking = {item.checking}
           completed = {item.completed}
           deleting = {item.deleting}
           handleDelete = {handleDelete}
           handleChecked = {handleChecked}
           title={item.title}
           key={item.id}
           userId={item.userId}
           users = {users}
           />
          );
        })
    }
    </>
  )
}


