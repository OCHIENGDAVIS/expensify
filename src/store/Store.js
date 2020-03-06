import {createStore, combineReducers} from 'redux'

const demoState = {
    expenses : [
        {
            id : 'cgdggfg',
            description : 'something short and sweet',
            note : 'this is the finale atment for the address',
            amount : 3434,
            createdAT : 0
        }
    ],
    filters : {
        text : 'rent',
        sortBy : 'amount', //date or amount
        startDate : undefined,
        endDate : undefined,
    }
}

const expensesReducer = (state=[], action)=>{
    switch(action.type){
        case 'ADD':
            return [...state, action.expense]
        case 'REMOVE':
            return state.filter(expense =>expense.id !== action.expense.id)
        default :
            return state
    }

}

const filterReducerDefault = {
    text : '',
    sortBy : 'date',
    startDate : undefined,
    endDate : undefined
}
const filterReducer = (state=filterReducerDefault, action)=>{
    switch(action.type){
        default : 
            return state
    }

}

export const store = createStore(
    combineReducers({
        expenses : expensesReducer,
        filters : filterReducer
    })
)

