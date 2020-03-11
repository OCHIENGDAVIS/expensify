import React from 'react'
import {connect} from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import getVisibleExpenses from '../selectors/Selector'



const ExpenseList = (props)=>{
    return(
        <div>
            <h2>Your Expenses List</h2>
            { props.expenses.length > 0 ? <p>{props.expenses[0].description}</p> : <p>No expense to display</p>}
            {
                props.expenses.map((expense)=>{
                    return <ExpenseListItem expense={expense} key={expense.id} />
                })
            }
            
        </div>
    )
}
const mapStateToProps = (state)=>{
    return {
        expenses : getVisibleExpenses(state.expenses, state.filters),
        filters : state.filter
    }
    
}
export default  connect(mapStateToProps)(ExpenseList)
