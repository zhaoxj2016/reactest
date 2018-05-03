import todoApp from '../reducers'
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
// import createLogger from 'redux-logger';
// const logger = createLogger();
// // console.log('todoApp',todoApp);
// let store = createStore(todoApp, applyMiddleware(logger));
// export default store;
const store = todoApp;

const other = [];
const middleware = process.env.NODE_ENV === 'production'
    ? [...other, thunk]
    : [...other, thunk];
const createStoreWithThunk = applyMiddleware(...middleware)(createStore);

//Redux 插件支持 https://github.com/zalmoxisus/redux-devtools-extension#usage
const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers();

/**
 * 核心的功能就是 调用redux的createStore 去生成store
 */
export default process.env.NODE_ENV === 'production'
    ? createStoreWithThunk(todoApp, store)
    : createStoreWithThunk(todoApp, store, enhancer);