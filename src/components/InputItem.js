import React from 'react'

function InputItem (props) {
  return (
    <div className='input-item'>
      <input
        type='text'
        onChange={props.onChange}
        placeholder='What needs to be done....'
        value={props.value}
      />
      <button onClick={props.onClick}>Add</button>
    </div>
  )
}
export default InputItem
