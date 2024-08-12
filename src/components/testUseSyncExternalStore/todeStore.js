let nextId = 0;
let todos = [{ id: nextId++, text: 'Learn React', completed: false }];
let listeners = [];

function emitChange() {
  for (let listener of listeners) {
    listener?.();
  }
};

export const todoStore = {
  addTodo: (text) => {
    todos = [...todos, { id: nextId++, text: `${text}_${nextId - 1}`, completed: false }];
    emitChange();
  },
  subscribe: (listener) => {
    listeners = [...listeners, listener];

    return () => {
      listeners = listeners.filter(l => l !== listener);
    }
  },
  getSnapshot: () => {
    return todos;
  },
}