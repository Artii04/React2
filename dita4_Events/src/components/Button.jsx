import React from 'react'

function Button() {
  
  const fun = () => {
    console.log("Button Clicked")
  }

  const fun2 = (name) => {
    console.log("Hello" + name)
  }
  
  return (
    <>
        <button onClick={fun} >Click Me</button>

        <button onClick={() => fun2("Amr")} >Click</button>
    </>
  )
}

export default Button