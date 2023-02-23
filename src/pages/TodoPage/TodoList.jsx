import React from "react";
import { Paper, List, Divider } from "@mui/material";
import TodoItem from "./components/TodoItem";
import { v4 as uuidv4 } from "uuid";

export default function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
  if (todos.length !== 0)
    return (
      <Paper>
        <List>
          {todos.map((todo, i) => (
            <div key={uuidv4()}>
              <TodoItem
                id={todo.id}
                task={todo.task}
                completed={todo.completed}
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
                editTodo={editTodo}
              />
              {i < todos.length - 1 ? <Divider /> : ""}
            </div>
          ))}
        </List>
      </Paper>
    );
  else {
    return (
      <Paper
        style={{
          textAlign: "center",
          fontSize: "24px",
          padding: "24px",
          color: "#999999",
        }}
      >
        Nothing to do. Go play Hogwarts Legacy!
      </Paper>
    );
  }
}
