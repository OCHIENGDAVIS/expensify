import React, {Component} from 'react'
import {connect} from 'react-redux'
import ExpenseForm from './ExpenseForm'
import {edit, remove} from '../actions/Action'





class  Edit extends Component{
	removeItem = ()=>{
        const newExpense = {
            expense : this.props.expense
        }
		this.props.dispatch(remove(newExpense))
		this.props.history.push('/')
        
    }
	
	render(){
	
		return (
			<div>
				<ExpenseForm 
					expense={this.props.expense}
					onSubmit={(expense)=>{
						this.props.dispatch(edit(this.props.expense.id,expense))
						this.props.history.push('/')
					}}
				/>
				<button onClick={this.removeItem} >Remove this Expense</button>
			</div>
		)
	}
	
     
}
const mapStateToProps = ((state, props)=>{
	return{
		expense : state.expenses.find((exp)=>exp.id=== props.match.params.id)
	}
})

export default connect(mapStateToProps)(Edit)