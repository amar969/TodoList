import {legacy_createStore as createStore, applyMiddleware, compose} from "redux";
import {reducer} from"./reducer.js";
import thunk from "redux-thunk";



const composeEnhancers =
typeof window === 'object' &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
}) : compose;

const middlewares = [thunk]
const enhancer = composeEnhancers(
  applyMiddleware(...middlewares),
  // other store enhancers if any
);

export const store = createStore(
    reducer,
   enhancer
)


store.subscribe(() => console.log(store.getState()))
   