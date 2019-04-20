import React, { useReducer } from 'react';
import reducer from './reducer.js';
import styles from './todos.scss';

const Todos = ({ initialTodos }) => {
  const [state, dispatch] = useReducer(reducer, { todos: initialTodos });

  const onSumbit = () => dispatch({
    type: 'addTodo',
    payload: state.inputValue
  });

  return (
    <div className={styles.todos}>
      <div className={styles.paddingLarge}>
        <input
          value={state.inputValue}
          onKeyDown={e => e.key === 'Enter' && onSumbit()}
          onChange={e =>
            dispatch({
              type: 'onChangeInput',
              payload: e.target.value,
            })
          }
        />
        <button onClick={onSumbit}>
          Add Todo
        </button>
      </div>
      <div>
        <div className={styles.paddingLarge}>Todos:</div>
        {state.todos.map(todo => (
          <div key={todo} className={styles.paddingLarge}>
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
