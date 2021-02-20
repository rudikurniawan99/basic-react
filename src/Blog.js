/**
 * Learn about list in React
 */

import { useState } from 'react'
import './Blog.css'

const Blog = () => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: 'First post',
      body: 'lorelj aflajlajjkaf akflakdf a a lekjflakjl lakjflkaje'
    },
    {
      id: 2,
      title: 'Second post',
      body: 'aljflwlfalfajkmvlajdlfa liuaiwepqk iaopuqprjq kaufal lakpqpqe peranta'
    },
    {
      id: 3,
      title: 'Third post',
      body: 'alkfjea a la ie ioweurp opiueprq apioeurpa kvj/zcv klafia'
    }
  ])

  return (
    <div className="blogs"> 
      {blogs.map((blog)=> (
        <div className="blog-preview">
          <h4> {blog.title} </h4>
          <p> {blog.body} </p>
        </div>
      ))}
    </div>
  )
}

export default Blog;
