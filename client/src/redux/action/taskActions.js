import { FETCH_TASKS, ADD_TASK, UPDATE_TASK, DELETE_TASK } from '../types';

export const fetchTasks = () => async (dispatch) => {
  try {
    const response = await fetch('/api/tasks');
    const data = await response.json();

    dispatch({ type: FETCH_TASKS, payload: data });
  } catch (error) {
    console.error('Error fetching tasks:', error);
  }
};

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const updateTask = (task) => ({
  type: UPDATE_TASK,
  payload: task,
});

export const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  payload: taskId,
});
