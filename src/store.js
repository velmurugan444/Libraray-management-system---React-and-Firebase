import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers/combine_reducers';
import thunk from 'redux-thunk';
const store = createStore(reducers, {}, applyMiddleware(thunk));
store.subscribe(() => {
    store.getState()
})
export default store;