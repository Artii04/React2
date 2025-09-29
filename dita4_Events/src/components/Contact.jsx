import {useState} from 'react'

function Contact() {
  const [list, setList] = useState([
    {id: 1, name:"Amr", age:25, city:"Prizren"},
    {id: 2, name:"Arianit", age:31, city:"Prizren"},
    {id: 1, name:"Ardian", age:29, city:"Prizren"},
    {id: 1, name:"Arbnor", age:28, city:"Prizren"},
    {id: 1, name:"Arlind", age:27, city:"Prizren"},
  ])
  return (
    <>
        <h1>Contact Page</h1>
        <p>This is the Contact Page</p>
        {list.map((item) => (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <p>Age: {item.age}</p>
            <p>City: {item.city}</p>
          </div>
        ))}
    </>
  )
}

export default Contact