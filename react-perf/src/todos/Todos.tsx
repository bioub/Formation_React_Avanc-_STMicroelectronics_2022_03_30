import React, { Component, useCallback, useMemo, useRef, useState } from 'react';
import { Todo } from './Todo';
import TodoForm from './TodoForm';
import TodosList from './TodosList';

// const initialTodos = [
//   {
//     id: 1,
//     title: 'ABC',
//     completed: false,
//   },
//   {
//     id: 2,
//     title: 'DEF',
//     completed: true,
//   }
// ]

const initialTodos: Todo[] = new Array(1000).fill({}).map((t, i) => ({
  id: i + 1,
  title: 'ABC',
  completed: Math.random() > 0.5,
}));

// function Todos() {
//   console.log('Todos renders');
//   const [todos, setTodos] = useState<Todo[]>(initialTodos);
//   const [newTodo, setNewTodo] = useState('');

//   function handleAdd() {
//     setTodos([
//       {
//         id: (todos.at(-1)?.id ?? 0) + 1, // dernier id + 1
//         title: newTodo,
//         completed: false,
//       },
//       ...todos,
//     ])
//   }

//   // const todosMemo = useMemo(() => [{id: 1, title: 'ABC', completed: false}], []);
//   // const todosRef = useRef([{id: 1, title: 'ABC', completed: false}]);

//   // const handleDeleteMemo = useMemo(() => (todo: Todo) => {
//   //   setTodos(todos.filter((t) => t.id !== todo.id));
//   // }, [todos]);

//   const handleDeleteMemo = useCallback((todo: Todo) => {
//     setTodos(todos.filter((t) => t.id !== todo.id));
//   }, [todos]);

//   return (
//     <div className="Todos">
//       <TodoForm newTodo={newTodo} onNewTodoChange={setNewTodo} onAdd={handleAdd} />
//       <TodosList todos={todos} onDelete={handleDeleteMemo} />
//     </div>
//   );
// }

type State = {
  todos: Todo[];
  newTodo: string;
};

class Todos extends Component {
  state: State = {
    todos: initialTodos,
    newTodo: '',
  };
  setNewTodo = (newTodo: string) => {
    this.setState({
      newTodo,
    });
  };
  handleAdd = () => {
    const { newTodo, todos } = this.state;
    this.setState({
      todos: [
        {
          id: (todos.at(-1)?.id ?? 0) + 1, // dernier id + 1
          title: newTodo,
          completed: false,
        },
        ...todos,
      ],
    });
  };
  handleDeleteMemo = (todo: Todo) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter((t) => t.id !== todo.id),
    });
  };
  render() {
    console.log('Todos renders');
    const { newTodo, todos } = this.state;
    const { setNewTodo, handleAdd, handleDeleteMemo } = this;
    return (
      <div className="Todos">
        <TodoForm newTodo={newTodo} onNewTodoChange={setNewTodo} onAdd={handleAdd} />
        <TodosList todos={todos} onDelete={handleDeleteMemo} />
      </div>
    );
  }
}

export default Todos;
