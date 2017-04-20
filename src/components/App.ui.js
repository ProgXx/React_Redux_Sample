import React from 'react';

const AppUI = ({todos}) => {
  return (
    todos.length
    ? <ul>
      {todos.map((todo,i) => {
        return <li key={i}>{todo.title}</li>
      })}
    </ul>
    : <div>Loading...</div>
  );
}

export default AppUI;
