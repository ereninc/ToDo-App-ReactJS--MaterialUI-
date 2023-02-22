import { Button, TextField } from "@mui/material";
import React from "react";
import useInputState from "../../../hooks/useInputState";

export default function EditTodoForm({ id, currentTask, editTodo }) {
  const [value, handleChange, reset] = useInputState(currentTask);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        editTodo(id, value);
        reset();
      }}
      style={{ display: "flex" }}
    >
      <TextField
        label={currentTask}
        margin="normal"
        onChange={handleChange}
        fullWidth
      />
      <Button
        variant="contained"
        size="large"
        style={{
          height: "54px",
          alignSelf: "center",
          marginLeft: "25px",
          marginTop: "5px",
        }}
        onClick={(e) => {
          e.preventDefault();
          editTodo(id, value);
          reset();
        }}
      >
        Save
      </Button>
    </form>
  );
}
