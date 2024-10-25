import React from 'react'

interface ButtonProps {
  deleting: boolean
  handleDelete: (id: number) => void
  id: number
}

export const Button: React.FC<ButtonProps> = ({handleDelete, deleting, id}) => {
  return (
    <button 
      onClick={() => handleDelete(id)}
      disabled={deleting}
      >Удалить</button>
  )
}
