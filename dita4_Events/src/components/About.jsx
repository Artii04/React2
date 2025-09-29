import React, {useState} from 'react'

function About() {
  const [name, setName] = useState("Amr")
  return (
    <>
        <h1>About Page</h1>

        <button onClick={() => setName("Arianit")} >Change Name</button>
        <button onClick={() => setName("Amr")} >Change Name2</button>
        <p>{name}</p>
    </>
  )
}

export default About