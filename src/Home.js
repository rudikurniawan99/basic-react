import './Home.css'
import { useState } from 'react'


const Home = ()=>{
  const [name, setName] = useState('Rudi Kurniawan')

  return (
    <div className="home">
      This is home section and my name is 
      <span style={
        {
          fontWeight: 'bold'
        }
      }> {name} </span>
      <br/>
      <button onClick={()=> setName('Bambang Bojonegoro')} >Click Me</button>
    </div>
  )
}

export default Home