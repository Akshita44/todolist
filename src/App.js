import React, { useEffect,useState} from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TodoForm from "./Components/TodoForm";
import Todos from "./Components/Todos";

const App = () => {
  const [todos, setTodos] =useState([]) 
  useEffect(()=>{
    const localTodos=localStorage.getItem("todos")
    if (localTodos){
      setTodos(JSON.parse(localTodos))
    }
  },[]);


  const additem= async todo => {
    setTodos([...todos,todo])//load up entire array 
  }

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
    },[todos])


    const markComplete=id=> {
      setTodos(todos.filter(todo =>todo.id !== id))
      alert("You completed this task👍👍")
    }
  return (
      <Container fluid>
        <h1 className="heading">My To Do List </h1>
        <TodoForm addtodo={additem}/>
        <Todos todos={todos} markComplete={markComplete} />
      </Container>
  );
};

export default App;
