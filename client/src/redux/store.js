import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import taskReducer from './reducers/taskReducer';
import userReducer from './reducers/userReducer';
import notificationReducer from './reducers/notificationReducer';

const rootReducer = combineReducers({
  tasks: taskReducer,
  user: userReducer,
  notifications: notificationReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
