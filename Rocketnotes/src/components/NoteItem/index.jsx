import { FiPlus, FiX } from 'react-icons/fi'

import { Component } from './styles';

export function NoteItem ({isNew, value, onClick, ...rest}) {
  return (
    <Component isNew={isNew}>
      <input 
      type='text'
      value={value}
      readOnly={!isNew}
      {...rest}
      />

    <button
      type="button"
      onClick={onClick}
      >
      { isNew ? <FiPlus /> : <FiX />}
    </button>

    </Component>
  )
}