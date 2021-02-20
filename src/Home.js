import './Home.css'
import Blog from './Blog'
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
      <h3 style={{ 
        marginTop: '20px',
        marginBottom: '20px'
      }} >My Blog Post</h3>
      <Blog />
    </div>
  )
}

export default Home