import React from 'react'
import ReactLoading from 'react-loading';

interface CheckingProps {
  handleChecked: (id: number, completed: boolean) => void
  completed: boolean
  checking: boolean
  id: number
}

export const Checking: React.FC<CheckingProps> = ({handleChecked, completed, checking, id}) => {
  return (
    <div>
        {
        checking ? <ReactLoading color="#126fcf" type="spin" height={20} width={20}/> : (
          <input
        type="checkbox"
        checked={completed}
        onChange={() => handleChecked(id, completed)}
      />
        )
      }
      </div>
  )
}
