import React from 'react'
import {connect} from 'react-redux'
import ExpenseForm from './ExpenseForm'
import {add} from '../actions/Action'

const Create = (props)=>{
    return (
        <div>
            Create a new expence
            <ExpenseForm 
                onSubmit={(expense)=>{
                    props.dispatch(add(expense))
                    props.history.push('/')
                    console.log(expense)
                }}
            />
        </div>
    )
}

export default connect() (Create)