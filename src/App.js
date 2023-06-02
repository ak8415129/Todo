import logo from './logo.svg';
import './App.css';
import Header from './My Component/Header';
import {Footer} from './My Component/Footer';
import { Todos } from './My Component/Todos';
import React ,{useState} from 'react';
import AddTodo from './My Component/AddTodo';

function App() { 

  const onDelete =(todo)=>{
    console.log(todo);
    console.log("Delete this")
    //for deleting thoda alag method hai react me higher order array method kuchh use hua hai
    setTodos(todos.filter((e)=>{
     return e!==todo;
    
   }))
   }  
   
   const addTodo=(title,desc)=>{

    console.log("T am adding ",title,desc)

   let sno=todos[todos.length-1].sno+1 

   const myTodo={
    sno:sno,
    title:title,
    desc:desc,
   } 
   //
   setTodos([...todos,myTodo])
console.log(myTodo);
   }

   const [todos,setTodos]=useState([
    {
         sno: 1,
         title: "Go to market",
         desc: "Go to market work 1 done by the developers"
    },
    {
      sno: 2,
      title: "Go to school",
      desc: "Go to school work 2 done by the developers"
    }
  ])

   
  return (
   <>
   <Header title="My Todos List" searchBar={false}/>
   <AddTodo addTodo={addTodo} />
   <Todos todos={todos} onDelete={onDelete}/> 
   <Footer />
   </>
  );
}

export default App;
