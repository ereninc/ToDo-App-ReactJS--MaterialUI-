import React, { useState } from "react";
import { Typography, Paper, AppBar, Toolbar, Grid } from "@mui/material";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

export default function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, task: "Clean Fishtank", completed: false },
    { id: 2, task: "Wash Car", completed: true },
    { id: 3, task: "Grow Beard", completed: false },
  ]);

  const addTodo = (newTodoText) => {
    setTodos([...todos, { id: 4, task: newTodoText, completed: false }]);
  };

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa",
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">TODOS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justifyContent="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList todos={todos} />
        </Grid>
      </Grid>
    </Paper>
  );
}
