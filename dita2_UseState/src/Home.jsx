import React, { useState } from 'react'

function Home() {
const x = 10;
const name = "Arti";
const arr = [1,2,3,4,5];
const obj = {
  name: "Art",
  age: 15,
  city: "Prizren"
};

const [vlera, setVlera] = useState(0);
return (
<>
  <h1>Home Page</h1>
  <p>Welcome to the Home Page</p>
  <p>{ x }</p>
  <p>{ name }</p>
  <p>{ arr }</p>
  <p>{ obj.name }-{ obj.age }-{ obj.city }</p>
  <p>Vlera: { vlera }</p>
  <button onClick={() =>setVlera(vlera + 1)}>Shto 1</button>
  <button onClick={() =>setVlera(vlera - 1)}>Heq 1</button>
</>
)
}
export default Home
