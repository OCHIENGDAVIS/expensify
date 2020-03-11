import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'

import {add, edit} from './actions/Action'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {store} from './store/Store'

const ex = store.dispatch(add({description : 'Exams fee'}))
store.dispatch(add({description : 'Exams fee', note:'Some super money to eat', amount: 4500}))
store.dispatch(add({description : 'Internet fee', note:'Some super money to eat', createdAt: 1000}))
store.dispatch(add({description : 'Food', note:'Some super money to eat', amount: 109500}))

const app = (
    <Provider store={store}>
        <BrowserRouter>
        <App />
        </BrowserRouter>
    </Provider>        
)
    

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
