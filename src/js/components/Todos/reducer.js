const initialState = {
  todos: [],
  inputValue: '',
};

export default (state, { type, payload }) => {
  switch (type) {
    case 'clear':
      return initialState;
    case 'addTodo':
      return {
        inputValue: '',
        todos: [ state.inputValue, ...state.todos ],
      };
    case 'onChangeInput':
      return {
        inputValue: payload,
        todos: state.todos,
      }
    default:
      return state;
  }
}
