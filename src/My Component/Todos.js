import React from 'react'
import NoTodoPage from './NoTodoPage'
import { TodoItem } from './TodoItem'
export const Todos = (props) => {
  return (
    <div className='container'>
    <h3 className='my-3'>Todos List</h3> 
    {/* java script higher order methos  */} 
     {props.todos.length===0?<NoTodoPage />:
    props.todos.map((todo) =>{
     return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
    })
  }
    </div>
  )
}
