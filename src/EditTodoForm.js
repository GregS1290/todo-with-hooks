import React from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState';

// since we have an input state hook, we dont have to rewrite, just reuse the hook

function EditTodoForm({ id, task, editTodo, toggleEditForm }) {
  const [value, handleChange, reset] = useInputState(task);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        editTodo(id, value);
        reset();
        toggleEditForm();
      }}
      style={{
        marginLeft: '1rem',
        width: '50%',
      }}
    >
      <TextField
        margin='normal'
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus //automatically puts the curser in the field after clicking
      />
    </form>
  );
}

export default EditTodoForm;
