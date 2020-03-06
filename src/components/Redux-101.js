import React from 'react'
import {createStore} from 'redux'




const countReducer = (state, action)=>{
    switch(action.type){
        
        default:
            return state
    }

}



const store = createStore((state={count : 0, name: 'davis'}, {total=0, type, incrementBy : value, decrementBy, resetBy})=>{
    
    switch(type){
        
        case 'INCREMENT':
            console.log(total)
            const inc = typeof value === 'number'? value : 1
            return {
                ...state,
                count : state.count + inc
            }
        case 'DECREMENT' :
            const dec = typeof decrementBy === 'number' ? decrementBy : 1
            return {
                ...state,
                count : state.count - dec
            }
        case 'RESET':
            const reset = typeof resetBy === 'number' ? resetBy : 0
            return{
                ...state,
                count : reset,
                
            }

        default:
            return state
    }
    return state
})

// console.log(store.getState())

// Actions and dispatching them..
const unsub = store.subscribe(()=>{
    console.log(store.getState())
})


const incrementCount = ()=>{
    return {
        'type' : 'INCREMENT'
    }
}

store.dispatch(incrementCount())

store.dispatch(incrementCount(5))

// store.dispatch({
//     type : 'DECREMENT'
// })
// store.dispatch({
//     type : 'DECREMENT',
//     decrementBy : 5
// })


// store.dispatch({
//     type : 'RESET'
// })
// store.dispatch({
//     type : 'RESET',
//     resetBy : 100
// })

const person ={
    name : 'davis',
    age : 23,
    location : {
        temperature : 30
    }
}
const {name, age, location} = person
console.log(name)
console.log(age)
console.log(location)
const {city: town='Nakuru', temperature, temp='Not there'} = person.location
console.log(town, 'from the town')
console.log(temperature)
console.log(temp)


const address = [
    '10 faith hose ',
    'pipeline',
    'Nairobi',
    'Kenya'
]
const [house, estate, city, country ] = address
console.log(`you are in ${city} ${estate}`)
























class ReduxFundamental extends React.Component{
    
    render(){
       
        return(
            <div>
                <h1>Welcome to the redux hell</h1>
            </div>
        )
    }
}

export default ReduxFundamental