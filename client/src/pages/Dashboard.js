import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../redux/actions/taskActions';
import TaskList from '../components/TaskList';

const Dashboard = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div>
      <h1>Dashboard</h1>
      <TaskList tasks={tasks} />
    </div>
  );
};
