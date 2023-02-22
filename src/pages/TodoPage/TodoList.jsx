import React from "react";
import { Paper, List, Divider } from "@mui/material";
import TodoItem from "./components/TodoItem";
import { v4 as uuidv4 } from "uuid";

export default function TodoList(props) {
  return (
    <Paper>
      <List>
        {props.todos.map((todo) => (
          <div key={uuidv4()}>
            <TodoItem
              id={todo.id}
              task={todo.task}
              completed={todo.completed}
              removeTodo={props.removeTodo}
              toggleTodo={props.toggleTodo}
            />
            <Divider />
          </div>
        ))}
      </List>
    </Paper>
  );
}
