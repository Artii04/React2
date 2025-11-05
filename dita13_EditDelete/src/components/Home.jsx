import React, { useEffect, useState } from 'react'
import BlogList from './BlogList'
import './Home.css'

function Home() {
  const [list, setList] = useState([])
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:1000/list')
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

  const viewButton = (id) => {
    const item = list.find(item => item.id === id);
    if (item) {
      // Show item details (quick view). Replace with modal or navigation if needed.
      alert(Object.entries(item).map(([k, v]) => `${k}: ${v}`).join('\n'));
      // console.log(item);
    } else {
      alert('Item not found');
    }
  }

  const editButton = (id) => {
    const item = list.find(i => i.id === id);
    if (!item) {
      alert('Item not found');
      return;
    }

    // Create a shallow copy and prompt the user to edit each field except id
    const edited = { ...item };
    Object.keys(item).forEach((key) => {
      if (key === 'id') return;
      const current = item[key] == null ? '' : String(item[key]);
      const value = window.prompt(`Edit ${key}:`, current);
      if (value !== null) {
        // Preserve numeric types when possible
        if (typeof item[key] === 'number') {
          const n = Number(value);
          edited[key] = Number.isNaN(n) ? item[key] : n;
        } else {
          edited[key] = value;
        }
      }
    });

    const newList = list.map(i => (i.id === id ? edited : i));
    setList(newList);
  }

  return (
    <>

      { loading && <h1>...</h1> }

      { error && <div>{ error }</div>}

      { list && <BlogList  list={list} x ="Lista e Nxenesve" 
      deleteButton={deleteButton} 
      viewButton={viewButton}
      editButton={editButton}/> }

    </>
  )
}

export default Home