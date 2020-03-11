import React, {Component} from 'react'
import {connect} from 'react-redux'
import ExpenseForm from './ExpenseForm'
import {edit, startRemove} from '../actions/Action'


class  Edit extends Component{
	removeItem = ()=>{

		this.props.remove(this.props.match.params.id)
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

const mapDispatchToProps = (dispatch)=>{
	return {
		remove : (id)=>dispatch(startRemove(id))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Edit)