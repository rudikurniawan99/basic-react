import { useState, useEffect } from 'react'
import axios from 'axios'


const Post = () => {
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getUser = async () => {
    try {
      let response = await axios.get('https://jsonplaceholder.typicode.com/posts')
      console.log(response.data);
      setPosts(response.data)
      setIsLoading(false)
      console.log(posts);

    }catch(e){
      console.log(e.message)
    }
  }
  useEffect(() => {
    getUser()
  },[])

  return (
    <div className="post">
      <h2>My Post</h2>
      {
        isLoading && 
        <strong>
          <p>Masih Loading</p>
        </strong>
      }
      {
        posts.map((post)=> (
          <div className="post-item" key={post.id}>
            <p 
              style={
                {
                  margin: '30px 0'
                }
              }
            >Title: {post.title} </p>
          </div>
        ))
      }
      
    </div>
  )
}

export default Post;