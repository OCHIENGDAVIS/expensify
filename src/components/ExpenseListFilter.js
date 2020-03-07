import React from 'react'
import {connect} from 'react-redux'
import {setFilter, sortByAmount, sortByDate} from '../actions/Action'

const ExpenseListFilter = (props)=>{
    const setText = (e)=>{
        const textInput = e.target.value
        props.dispatch(setFilter({text : textInput}))
    }
    const setSortValue = (e)=>{
        const val = e.target.value
        if(val === 'date'){
            props.dispatch(sortByDate({text : val}))
        }
        else{
            props.dispatch(sortByAmount(val))
        }
    }
    return (
        <div>
            <input type='text' value={props.filters.text} onChange={setText} />
            <select onChange={setSortValue}>
                <option value='date'>Date</option>
                <option value = 'amount'>Amount</option>
            </select>
        </div>
    )
}
const mapStateToProps = ((state)=>{
    return {
        filters : state.filters
    }
})

export default connect(mapStateToProps) (ExpenseListFilter)