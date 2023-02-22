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
            <TodoItem task={todo.task} completed={todo.completed} />
            <Divider />
          </div>
        ))}
      </List>
    </Paper>
  );
}
