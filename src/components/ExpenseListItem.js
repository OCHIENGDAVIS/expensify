import React from 'react'
import {connect} from 'react-redux'
import {remove} from '../actions/Action'

const ExpenseListItem = (props)=>{
    console.log(props)
    const removeItem = ()=>{
        const newExpense = {
            expense : props.expense
        }
        props.dispatch(remove(newExpense))
        console.log(newExpense)
    }
    
    return (
        <div>
            <h3>{props.expense.description}</h3>
            {props.expense.note ? <small>{props.expense.note}</small> : null}
            <p><strong>KSHs . {props.expense.amount}</strong></p>
            <p>Created at : {props.expense.createdAt}</p>
            <button onClick={removeItem} >Remove this Expense</button> <br />
            -------------------------------------------------------
    
        </div>
    )
}
// const mapStateToProps =(state)=>{
//     return {
//         state
//     }
// }
// const mapDispatchToProps = ()=>{
   
// }
export default connect() (ExpenseListItem)