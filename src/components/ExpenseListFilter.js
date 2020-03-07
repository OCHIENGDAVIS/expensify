import React from 'react'
import {connect} from 'react-redux'
import {setFilter} from '../actions/Action'

const ExpenseListFilter = (props)=>{
    const setText = (e)=>{
        const textInput = e.target.value
        props.dispatch(setFilter({text : textInput}))
    }
    return (
        <div>
            <input type='text' value={props.filters.text} onChange={setText} />
        </div>
    )
}
const mapStateToProps = ((state)=>{
    return {
        filters : state.filters
    }
})

export default connect(mapStateToProps) (ExpenseListFilter)