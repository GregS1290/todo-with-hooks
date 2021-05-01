import React, { useEffect } from 'react';
import useTodoState from './hooks/useTodoState';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';

function TodoApp() {
  const initialTodos = [{ id: 1, task: 'Study Algos', completed: false }];

  const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState(
    initialTodos
  );

  //useEffect runs on every render, even the initial render!
  // we only have one piece of state that triggers the render, so we don't have to modify it
  //but the second argument will let us specify when to trigger a re render, in this case the change in
  // the todos array
  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: '100vh',
        backgroundColor: '#fafafa',
      }}
      elevation={0}
    >
      <AppBar color='primary' position='static' style={{ height: '64px' }}>
        <Toolbar>
          <Typography color='inherit'>TODOS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>
      <Grid
        container
        justify='center'
        style={{
          marginTop: '1rem',
        }}
      >
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TodoApp;

/**

- TodoApp
  - TodoForm
  - TodoList
    -TodoItem

Each Todo
id, task, completed

 */
