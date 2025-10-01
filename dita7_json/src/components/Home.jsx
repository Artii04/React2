import React, { useEffect, useState } from 'react'
import BlogList from './BlogList'
import ViewList from './ViewList'

function Home() {
  const [list, setList] = useState([
    {id: 1, name:"Amr", age:25, city:"Prizren"},
    {id: 2, name:"Arianit", age:31, city:"Prizren"},
    {id: 3, name:"Ardian", age:29, city:"Prizren"},
    {id: 4, name:"Arbnor", age:28, city:"Prizren"},
    {id: 5, name:"Arlind", age:27, city:"Prizren"},
  ])

  useEffect(() => {
    console.log("Components loaded");
    console.log(list);
  }, []);

  const deleteButton = (id) =>{
    const newList = list.filter(list => list.id !== id);
    setList(newList);
  }

  return (
    <>
        {/* {list.map((item) => (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <p>Age: {item.age}</p>
            <p>City: {item.city}</p>
          </div>
        ))} */}
        <BlogList  list={list} x ="Lista e Nxenesve" deleteButton={deleteButton}/>
    </>
  )
}

export default Home