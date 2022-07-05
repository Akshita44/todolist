import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { FaCheckDouble } from "react-icons/fa";

const Todos = ({todos, markComplete}) => {
  return (
    <ListGroup className="mt-5 mb-2 items">
      {todos.length !==0 ? todos.map(todo => (
        <ListGroupItem key={todo.id} className="list"> 
          {todo.todoString}
          <span
            className="float-right mark"
            onClick={()=>{markComplete(todo.id)}}
          >
            <FaCheckDouble />
          </span>
        </ListGroupItem>
      )):<h2>No To Dos Present</h2>}
    </ListGroup>
  );
};

export default Todos;
