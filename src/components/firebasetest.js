
import { auth, db } from '../firebase/firebase';
import React,{useState,useEffect} from 'react';

function FirebaseTest() {
  const [blogs,setBlogs]=useState([])
  const fetchBlogs=async()=>{
    const response=db.collection('items');
    const data=await response.get();
    data.docs.forEach(item=>{
     setBlogs([...blogs,item.data()])
    })
  }
  useEffect(() => {
    fetchBlogs();
  }, [])
  return (
    <div>
      {
        blogs && blogs.map(blog=>{
          
            <div className="blog-container">
              <h4>{blog.title}</h4>
              <p>{blog.body}</p>
            </div>
          
        })
      }
    </div>
  );
}

export default FirebaseTest;