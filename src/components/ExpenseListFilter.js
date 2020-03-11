import React, {Component} from 'react'
import {connect} from 'react-redux'
import {DateRangePicker} from 'react-dates'
import {setFilter, sortByAmount, sortByDate, setStartDate,setEndDate} from '../actions/Action'

class ExpenseListFilter extends Component {
	state = {
		calendarFocused : null,

	}
	setText = (e)=>{
        const textInput = e.target.value
        this.props.dispatch(setFilter({text : textInput}))
	}
	setSortValue = (e)=>{
        const val = e.target.value
        if(val === 'date'){
            this.props.dispatch(sortByDate({text : val}))
        }
        else{
            this.props.dispatch(sortByAmount(val))
        }
	}
	onDatesChange = ({startDate, endDate})=>{
		this.props.dispatch(setStartDate({startDate: startDate}))
		this.props.dispatch(setEndDate(endDate))
		
	

	}
	onFocusChange = (calendarFocused)=>{
		this.setState(()=>{
			return {
				calendarFocused
			}
		})
	}
	render(){
		return (
			<div>
				<input type='text' value={this.props.filters.text} onChange={this.setText} />
				<select onChange={this.setSortValue} value={this.props.filters.sortBy}>
					<option value='date'>Date</option> 
					<option value = 'amount'>Amount</option>
				</select>
				<DateRangePicker 
					startDate ={this.props.filters.startDate}
					startDateId='sdsdsdsd'
					endDate = {this.props.filters.endDate}
					endDateId = 'sdsdsee'
					onDatesChange = {this.onDatesChange}
					focusedInput={this.state.calendarFocused}
					onFocusChange = {this.onFocusChange}
					numberOfMonths={1}
					isOutsideRange={()=>false}
					showClearDates={true}
				/>
			</div>
		)
	}
    
    
   
}
const mapStateToProps = ((state)=>{
    return {
        filters : state.filters
    }
})

export default connect(mapStateToProps) (ExpenseListFilter)