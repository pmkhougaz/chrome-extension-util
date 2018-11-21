import React, { useReducer } from 'react';
import reducer from './reducer.js';
import styles from './todos.scss';

const Todos = ({ initialTodos }) => {
  const [state, dispatch] = useReducer(reducer, { todos: initialTodos });

  return (
    <div className={styles.todos}>
      <div className={styles.paddingLarge}>
        <input
          onChange={e =>
            dispatch({
              type: 'onChangeInput',
              payload: e.target.value,
            })
          }
        />
        <button
          onClick={() =>
            dispatch({
              type: 'addTodo',
              payload: state.inputValue,
            })
          }
        >
          Add Todo
        </button>
      </div>
      <div className={styles.paddingLarge}>
        Todos:
        {state.todos.map(todo => (
          <div
            key={todo}
            className={styles.paddingLarge}
          >
            {todo}
          </div>
        ))}
      </div>
    </div>
  );
}

Todos.defaultProps = {
  initialTodos: []
}

export default Todos;
