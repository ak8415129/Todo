import React, { useState } from 'react'

export default function AddTodo(props) {

    const [title ,setTitle]=useState("");
    const [desc ,setDesc]=useState("");

    const submit=(e)=>{
      e.preventDefault();
      if(!title || !desc)
      {
        alert("Title or desc is required")
      }
      
     props.addTodo(title, desc);
    }
  return (
    <div className='container my-3'>
        <h3>Add a Todo</h3>
        <form onSubmit={submit}>
  <div className="form-group">
    <label htmlFor="title">Todo-Title</label>
    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control my-3" id="title" aria-describedby="emailHelp"  />
   
  </div>
  <div className="form-group">
    <label htmlFor="desc">Todo- Description</label>
    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control my-3" id="desc"/>
  </div>
  
  <button type="submit" className="btn btn-sm btn-success my-3">Add To-Do</button>
</form>
    </div>
  )
}
