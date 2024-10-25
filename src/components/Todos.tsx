import React from 'react'
import { useSelector } from 'react-redux';
import { Todo } from './Todo';
import { useTypedSelector } from '../hooks';

interface TodosProps {
  handleDelete: (id: number) => void
  handleChecked: (id: number, completed: boolean) => void
}

export const Todos: React.FC<TodosProps> = ({handleDelete, handleChecked}) => {

    const todos = useTypedSelector((state) => state.todos);

    const users = useTypedSelector((state) => state.users)
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


