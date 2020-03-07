import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'

import {add, edit, setFilter} from './actions/Action'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {store} from './store/Store'

const ex = store.dispatch(add({description : 'Exams fee'}))
store.dispatch(add({description : 'Exams fee', note:'Some super money to eat'}))
store.dispatch(setFilter({text: 'Some super money to eat'}))


setTimeout(()=>{
    store.dispatch(edit({id : ex.expense.id, updates: {description : 'Some mony i used in partying hard'}}))
}, 2000)

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
