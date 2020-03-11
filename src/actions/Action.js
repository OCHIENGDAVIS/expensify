
import axios from 'axios'

// Add expense 

const add = (expense)=>{
    return {
        type : 'ADD',
        expense
          

    }
}
export const  startAddExpense = (expenseData)=>{
	return (dispatch)=>{
		axios.post('http://localhost:8000/api/expensify/create/', expenseData).then((res)=>{
			console.log(res.data)
			dispatch(add(expenseData))
		})
		.catch((error)=>{
			console.log(error)
		})
	}
}

//Remove expense

const remove = (id)=>{
    return {
        type: 'REMOVE',
        id

    }

}
export const startRemove = (id)=>{
	return (dispatch)=>{
		axios.delete(`http://localhost:8000/api/expensify/${id}/delete/`)
		.then((res)=>{
			console.log(res.data)
			dispatch(remove(id))
		})
		.catch((error)=>{
			console.log(error)
		})
	}
}

// Edit expense

export const edit = (id, updates)=>{
    return {
        type : 'EDIT',
        id,
        updates
       
    }
}

// Setting initial array values (Bootstrapping the apllication)

const setExpenses = (expenses)=>{
	return{
		type : 'SET_EXPENSES',
		expenses
	}
}

export const startSetExpenses = ()=>{
	return (dispatch)=>{
		axios.get('http://localhost:8000/api/expensify/')
		.then((res)=>{
			console.log(res.data)
			const expenses = res.data
			dispatch(setExpenses(expenses))
		}).catch((error)=>{
			console.log(error)
		})
	}
}







// set TextFilter

export const setFilter = ({text=''}={})=>{
    return{
        type : 'SET_TEXT',
        text
    }
}

// sort by date

export const sortByDate = ({text='date'}={})=>{
    return{
        type : 'SORT_BY_DATE',
        text

    }
}

// set by amount

export const sortByAmount = ({text='amount'}={})=>{
    return{
        type : 'SORT_BY_DATE',
        text

    }
}

// set start date

export const setStartDate = ({startDate}={})=>{
    return {
        type : 'SET_START_DATE',
        startDate
    }
}


export const setEndDate = (endDate=1250)=>{
    return{
        type : 'SET_END_DATE',
        endDate
    }
}




