import React from 'react'
import { Button } from './Button';
import { Checking } from './Checking';

export const Todo = ({id, completed, checking, deleting, handleChecked, handleDelete, title}) => {
  return (
    <div className="posts_wrapper" key={id}>
    <div className="checkbox">
      <Checking 
      completed = {completed}
      checking = {checking}
      handleChecked = {handleChecked}
      id = {id}
      />
    </div>
    <div className="posts">{title}</div>
    <div className="button">
      <Button 
      deleting = {deleting}
      handleDelete = {handleDelete}
      id = {id}
      />
    </div>
  </div>
  )
}
