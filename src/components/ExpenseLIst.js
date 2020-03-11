import React from 'react'
import {connect} from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import getVisibleExpenses from '../selectors/Selector'



const ExpenseList = (props)=>{
	console.log(props.expenses)
	let expenses = <h3>Loading........</h3>
	if(props.expenses.length > 0){
		expenses = props.expenses.map((expense, i)=>{	
			console.log(expense)
			return <ExpenseListItem {...expense} key={i} />
		})
	}
    return(
        <div>
            <h2>Your Expenses List</h2>
            {
                expenses
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
