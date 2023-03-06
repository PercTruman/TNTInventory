import React, {useState,useEffect} from 'react'
import Navbar from '../Components/Navbar'

function Fireworks() {
  const [fireworks, setFireworks] = useState([])
  useEffect(() =>{
   getFireworks();
  },[])

  function getFireworks(){
    fetch('/fireworks')
      .then(res => res.json())
       .then((data) => setFireworks(data))
  }
  console.log(fireworks)
  return (
    <div>
        <Navbar />
        Fireworks
    </div>
  )
}

export default Fireworks