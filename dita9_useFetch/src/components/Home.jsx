import React, { useEffect, useState, use } from 'react'
import BlogList from './BlogList'
import ViewList from './ViewList'
import useFetch from './useFetch'

function Home() {
  const {
    list:list,
    error,
    loading
  } = useFetch("http://localhost:3000/list")

  const deleteButton = (id) =>{
    const newList = list.filter(list => list.id !== id);
    setList(newList);
  }

  return (
    <>

      { loading && <div>Loading . . .</div> }

      { error && <div>{ error }</div>}

      { list && <BlogList  list={list} x ="Lista e Nxenesve" deleteButton=
      {deleteButton} /> }

      

    </>
  )
}

export default Home