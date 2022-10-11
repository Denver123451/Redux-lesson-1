import { createStore, combineReducers } from 'redux';
import projects from './projects/reducer';

const reducers = combineReducers({
  projects,
});

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
);

export default store;
