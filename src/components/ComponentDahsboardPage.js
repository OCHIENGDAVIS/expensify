import React from 'react'
import ExpenseList from './ExpenseLIst'
import ExpenseListFilter from './ExpenseListFilter'

const Dashboard =(props)=>{
          
    return (
        <div> 
            <p>FIlter your components</p>
            <ExpenseListFilter />
            <ExpenseList />
            
        </div>
    )
}

export default Dashboard
