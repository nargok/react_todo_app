export const inputTask = (task) => ({
  type: 'INPUT_TASK',
  payload: {
    task
  }
})

// Action
export const addTask = (task) => ({
  type: 'ADD_TASK',
  payload: {
    task
  }
})