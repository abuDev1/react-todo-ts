import React from 'react'
import ReactLoading from 'react-loading';

export const Checking = ({handleChecked, completed, checking, id}) => {
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
