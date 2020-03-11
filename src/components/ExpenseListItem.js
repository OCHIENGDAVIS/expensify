import React from 'react'
import {Link} from 'react-router-dom'


const ExpenseListItem = (props)=>{
    console.log(props)
    return (
        <div>
			{console.log(props.id)}
            <Link to={`/edit/${props.id}`}><h3>{props.description}</h3></Link>
            {props.note ? <small>{props.expense.note}</small> : null}
            {props.amount ? <p><strong>KSHs . {props.amount}</strong></p> : null}
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