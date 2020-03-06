import React from 'react';
import './App.css';
import {Route, Switch, NavLink} from 'react-router-dom'
import Header from './components/Header'
import Layout from './components/Layout'
import Dashboard from "./components/ComponentDahsboardPage";
import Create from './components/Create'
import Edit from './components/Edit'
import Help from './components/Help'
import Error from './components/Error'
import PortfolioRoutes from './components/routers/PortfolioRoutes'
import ReduxFun from './components/Redux-101'
import {store} from './store/Store'
import {add, edit, setFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from './actions/Action'



// store.subscribe(()=>{
//   console.log(store.getState())
// })


const fees = store.dispatch(add({description : 'School fees', amount : 1500}))
store.dispatch(add({description : 'Rent', amount : 1500, createdAt: 1000}))
store.dispatch(add({description : 'Partying', amount : 1500, createdAt : -1000})) 
store.dispatch(edit({
  id : fees.expense.id,
  updates : {
    amount : 3000000,
    description : 'Some money i used on girls'
  }
}))



// get visible expenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate})=>{
  return expenses.filter((expense)=>{
    const startDateMatch  = typeof startDate !== 'number' || expense.createdAt  >= startDate
    const endDateMatch = typeof endDate !=='number' || expense.createdAt <= endDate
    const textMatch  = expense.description.toLowerCase().includes(text.toLowerCase())
    return startDateMatch && endDateMatch && textMatch
  }).sort((a, b)=>{
    if(sortBy === 'date'){
      return a.createdAt < b.createdAt ? 1 : -1
    }
  })
}

// store.dispatch(setFilter({text : 'rent'}))

// store.dispatch(sortByDate({text : 'date'}))
// store.dispatch(sortByAmount({text : 'amount'}))
// store.dispatch(setStartDate({startDate : 125}))
store.dispatch(setStartDate(125))
// store.dispatch(setEndDate())


store.subscribe(()=>{
  const state = store.getState()
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
  console.log(visibleExpenses)
})





function App() {
  const routes = (
      <Layout>
        <Header />
        <Switch>
          <Route path='/' component={Dashboard} exact={true} />
          <Route path='/create' component={Create} exact={true} />
          <Route path='/edit/:id' component={Edit} exact={true} />
          <Route path='/Help' component={Help} exact={true} />
          <Route component={Error} />
        </Switch>
        <hr />
        <h2>Portfolio</h2>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <PortfolioRoutes />
       

      </Layout>
  )
  return (
    <div className="App">
      {/* {routes} */}
      {/* <ReduxFun /> */}
     
    </div>
  );
}

export default App;
