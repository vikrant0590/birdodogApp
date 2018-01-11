import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {persistStore, autoRehydrate } from 'redux-persist';
import reducer from './modules/reducer';
import {AsyncStorage} from 'react-native'


const middleware = [];

// a function which can create our store and auto-persist the data
export default (apiClient) => {
  middleware.push(thunk.withExtraArgument(apiClient));
  const store = createStore(
    reducer,
    applyMiddleware(thunk),
    autoRehydrate()
  );
  persistStore(store, { storage: AsyncStorage });
  return store;
};
