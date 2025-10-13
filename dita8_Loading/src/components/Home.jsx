import React, { useEffect, useState } from 'react'
import BlogList from './BlogList'
import ViewList from './ViewList'
import './Home.css'

function Home() {
  const [list, setList] = useState([])
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:1234/list')
    .then(res => {
      return res.json()
    })
    .then(data => {
      setList(data)
      setLoading(false)
    })
    .catch(err => {
      setError("Could not fetch the data");
      setLoading(false)
    })
  }, []);

  const deleteButton = (id) =>{
    const newList = list.filter(list => list.id !== id);
    setList(newList);
  }

  return (
    <>

      { loading && <div><img src="https://st5.depositphotos.com/1001248/64982/v/600/depositphotos_649827430-stock-video-loading-circle-video-loading-animation.jpg"/></div> }

      { error && <div>{ error }</div>}

      { list && <BlogList  list={list} x ="Lista e Nxenesve" deleteButton=
      {deleteButton} /> }

      

    </>
  )
}

export default Home