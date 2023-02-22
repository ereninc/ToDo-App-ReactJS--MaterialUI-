import React from "react";
import { Paper, TextField } from "@mui/material";
import useInputState from "../../hooks/useInputState";

export default function TodoForm(props) {
  const [value, handleChange, reset] = useInputState("");

  return (
    <Paper>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.addTodo(value);
          reset();
        }}
      >
        <TextField value={value || []} onChange={handleChange} />
      </form>
    </Paper>
  );
}
