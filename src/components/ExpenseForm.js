import React, {Component} from 'react'
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment'
class  ExpenseForm extends Component{
	constructor(props){
		super(props)
		this.state = {
			description : this.props.expense ? this.props.expense.description :  '',
			note : this.props.expense ? this.props.expense.none : '',
			amount : this.props.expense ? String(this.props.expense.amount) : '',
			createdAt : this.props.expense ? moment(this.props.expense.createdAt) : moment(),
			focused : false,
			error : false
			
	
		}
	}
    handleDescriptionChange = (e)=>{
        const desc = e.target.value
        this.setState((prevState)=>{
            return {
                ...prevState,
                description : desc
            }
        })
    }
    handleNoteChange = (e)=>{
        const note = e.target.value
        this.setState((prevState)=>{
            return {
                ...prevState,
                note : note,
                name : 'Ochieng ogori'
            }
        })
    }
    handleAmountChange = (e)=>{
        const amount = e.target.value
        this.setState(()=>{
            return {
                amount : amount
            }
        })
        
    }
    onDateChange = (createdAt)=>{
        this.setState(()=>{
            return {
                createdAt : createdAt
            }
        })
    }
    onFocusChange = ({focused})=>{
        this.setState(()=>{
            return {
                focused: focused
            }
        })
    }
    handleSubmit = ()=>{
        if(!this.state.description || !this.state.amount){
            this.setState(()=>{
                return{
                    error : true
                }
            })
        }
        else{
            
            this.setState(()=>{
                console.log('submitted!')
                this.props.onSubmit({
                    description : this.state.description,
                    amount : this.state.amount,
                    note : this.state.note,
                    createdAt : this.state.createdAt.valueOf()
                })
              
                return {
                    error : false,
                    description : '',
                    amount : ''
                }
            })
        }
    }
    render(){
        return  (
            <div>
                <h3>Add Expense Form</h3>
                <form onSubmit={(e)=>{e.preventDefault()}}>
                    <p>
                        <input 
                            type="text" 
                            placeholder='Description' 
                            autoFocus 
                            value={this.state.description}
                            onChange={this.handleDescriptionChange}

                         />
                    </p>
                   {this.state.error ?  <span>*Description Cannot be empty*</span> : null}
                    <p>
                        <input 
                            type="text" 
                            placeholder="Amount" 
                            onChange={this.handleAmountChange}
                        
                        />
                    </p>
                    {this.state.error ? <span>*Amount Cannot be empty*</span> : null } <br />
                    <SingleDatePicker 
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused ={this.state.focused}
                        onFocusChange = {this.onFocusChange}
                        numberOfMonths = {1}
                        isOutsideRange ={(day)=>false}
                    
                    />
                    <p>
                        <textarea 
                            placeholder="Put a note about your expense"
                            value = {this.state.note}
                            onChange={this.handleNoteChange}
                        >
    
                        </textarea>
                    </p>
                    <p>
                        <button onClick={this.handleSubmit}>Add Expense</button>
                    </p>
                </form>
            </div>
        )
    }
}

export default ExpenseForm