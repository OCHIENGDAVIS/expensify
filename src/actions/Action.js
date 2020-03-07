import {v4 as uuidv4 } from  'uuid' 

// Add expense 

export const add = ({ description='', note='', amount =0, createdAt=0 }={})=>{
    return {
        type : 'ADD',
        expense : {
            id : uuidv4(),
            description,
            note,
            amount,
            createdAt

        }
    }
}

//Remove expense

export const remove = ({expense}={})=>{
    return {
        type: 'REMOVE',
        expense

    }

}

// Edit expense

export const edit = ({id, updates}={})=>{
    return {
        type : 'EDIT',
        id,
        updates
       
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
