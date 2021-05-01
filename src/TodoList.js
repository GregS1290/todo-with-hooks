import React from 'react';
import Paper from '@material-ui/core/Paper';
//import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import Todo from './Todo';

function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
  return (
    <Paper>
      {todos.map((todo, i) => (
        <>
          <Todo
            //by passing it down with the spread operator, we dont have to extract id complete and task
            {...todo}
            key={todo.id}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
          />
          {i < todos.length - 1 && <Divider />}
        </>
      ))}
    </Paper>
  );
}

export default TodoList;
