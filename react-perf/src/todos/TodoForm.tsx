import React, { ChangeEvent, FormEvent } from 'react';

type Props = {
  newTodo: string;
  onNewTodoChange(newTodo: string): void;
  onAdd(): void;
}

function TodoForm({ newTodo, onNewTodoChange, onAdd }: Props) {
  console.log('TodoForm renders');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onAdd();
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    onNewTodoChange(event.target.value);
  }

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input value={newTodo} onChange={handleChange} />
      <button>+</button>
    </form>
  );
}

export default TodoForm;
