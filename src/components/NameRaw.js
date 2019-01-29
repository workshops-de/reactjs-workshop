import React from 'react'

const NameRaw = () => {
  const name = 'Max Mustermann'
  return React.createElement('div', null, `Hello ${name}`)
}

export default NameRaw
