import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Test = () => {

    const [comments,setComments]=useState([]);
    useEffect(() => {
        fetchComments();
    }, []);

    useEffect(() => {
        console.log(comments)
      }, [comments])

    const fetchComments=async()=>{
        const response=await axios('https://jsonplaceholder.typicode.com/comments');
        setComments(response.data)    
    }
  

    return (
        <div>
                {/***************************/}
                <div>
                {
                    comments && comments.map(comment=>{
                    return(
                        <div key={comment.id} style={{alignItems:'center',margin:'20px 60px'}}>
                        <h4>{comment.name}</h4>
                        <p>{comment.email}</p>
                    </div>
                    )

                    })
                }
                </div>  
                {/*---------------------------*/}
        </div>
    )
}

export default Test
