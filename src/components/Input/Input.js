import React from 'react'

function Input({onInput, type, value, placeholder}) {
  return (
    <div>
        { type === 'input' ? <input value={value} placeholder={placeholder} className="input" onInput={onInput} /> : <textarea placeholder={placeholder} className="input" onInput={onInput}>{value}</textarea>}
    </div>
  )
}

export default Input