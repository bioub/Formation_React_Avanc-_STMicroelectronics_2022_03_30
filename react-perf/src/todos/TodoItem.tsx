import React from 'react';
import { Todo } from './Todo';

type Props = {
  todo: Todo;
  onDelete(todo: Todo): void;
}

function TodoItem({todo, onDelete}: Props) {
  console.log('TodoItem renders');
  return (
    <div className="TodoItem">
      <span>{todo.title}</span>
      <button onClick={() => onDelete(todo)}>-</button>
    </div>
  );
}

export default TodoItem;
