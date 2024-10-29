import React from 'react'
import { Button } from './Button';
import { Checking } from './Checking';
import { useSelector } from 'react-redux';

export const Todo = ({
  id, 
  completed, 
  checking, 
  deleting, 
  handleChecked, 
  handleDelete, 
  title, 
  userId,
  users
}) => {

  
  const user = users.find((u) => u.id === userId)
  
  return (
    <div className="todos_wrapper" key={id}>
    <div className="checkbox">
      <Checking 
      completed = {completed}
      checking = {checking}
      handleChecked = {handleChecked}
      id = {id}
      />
    </div>
    <div className="todos">
      {title}
      <br />
      (email: {user.email})
      </div>
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
