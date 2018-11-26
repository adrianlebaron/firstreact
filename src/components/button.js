import React from 'react'

export const Button = (props) => {
  return(
    <div>
      <button className="{props.className}"></button>
      <div>{props.body}</div>
    </div>
  )
}