import React from 'react'
import {connect} from 'react-redux'
import ExpenseForm from './ExpenseForm'
import {startAddExpense} from '../actions/Action'

const Create = (props)=>{
    return (
        <div>
            Create a new expence
            <ExpenseForm 
                onSubmit={(expense)=>{
                    props.add(expense)
                    props.history.push('/')
                    console.log(expense)
                }}
            />
        </div>
    )
}

const mapDispatchToProps = ((dispatch)=>{
	return {
		add : (expense)=>dispatch(startAddExpense(expense))
	}
})

export default connect(null, mapDispatchToProps) (Create)