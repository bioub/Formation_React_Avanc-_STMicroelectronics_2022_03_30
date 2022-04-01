import React, { memo, useMemo, PureComponent } from 'react';
import { Todo } from './Todo';
import TodoItem from './TodoItem';

type Props = {
  todos: Todo[];
  onDelete(todo: Todo): void;
};

class TodosList extends PureComponent<Props> {
  // shouldComponentUpdate(nextProps: Props) {
  //   return this.props.todos === nextProps.todos;
  // }
  render() {
    const { todos, onDelete } = this.props;
    return (
      <div className="TodosList">
        {/* <div>Nombre d'élément restant : {count}</div> */}
        {todos.map((t) => (
          <TodoItem key={t.id} todo={t} onDelete={onDelete} />
        ))}
      </div>
    );
  }
}

export default (TodosList);

// function TodosList({todos, onDelete}: Props) {
//   console.log('TodosList renders');

//   function countNotCompleted(todos: Todo[]) {
//     console.log('countNotCompleted called');

//     return todos.filter(t => !t.completed).length;
//   }

//   const count = useMemo(() => countNotCompleted(todos), [todos])

//   return (
//     <div className="TodosList">
//       <div>Nombre d'élément restant : {count}</div>
//       {todos.map((t) => <TodoItem key={t.id} todo={t} onDelete={onDelete} />)}
//     </div>
//   );
// }

// export default memo(TodosList);

// export default memo(TodosList, (prevProps, nextProps) => prevProps.todos === nextProps.todos);
