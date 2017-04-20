import todos from '../data/todos';

export const fetchTodos = () => {
  return {
    type : 'FETCH_TODOS',
    payload : todos
  }
}
