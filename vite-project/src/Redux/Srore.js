import { createStore } from 'redux';
import nameReducer from './Reduser';

const store = createStore(nameReducer);

export default store;
