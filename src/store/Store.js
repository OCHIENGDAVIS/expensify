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
        case 'EDIT':
            return state.map((expense)=>{
                if(expense.id === action.id){
                    return{
                        ...expense,
                        ...action.updates
                    }
                }else{
                    return expense
                }
            })

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
        case 'SET_TEXT':
            return{
                ...state,
                text : action.text
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy : action.text
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate : action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate : action.endDate
            }
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

