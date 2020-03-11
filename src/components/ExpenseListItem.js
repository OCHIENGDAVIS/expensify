import React from 'react'
import {Link} from 'react-router-dom'


const ExpenseListItem = (props)=>{
    
    
    return (
        <div>
            <Link to={`/edit/${props.expense.id}`}><h3>{props.expense.description}</h3></Link>
            {props.expense.note ? <small>{props.expense.note}</small> : null}
            <p><strong>KSHs . {props.expense.amount}</strong></p>
            <p>Created at : {props.expense.createdAt}</p>
              <br />
            -------------------------------------------------------
    
        </div>
    )
}
// const mapStateToProps =(state)=>{
//     return {
//         state
//     }
// }
// const mapDispatchToProps = ()=>{
   
// }
export default ExpenseListItem