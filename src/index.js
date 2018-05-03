import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import './index.css';
import App from './App';
import {
    HashRouter as Router,
} from "react-router-dom";
// import About from './components/about';
// import Demo2 from './components/demo2';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>
    ,
    document.getElementById('root')
);
registerServiceWorker();
