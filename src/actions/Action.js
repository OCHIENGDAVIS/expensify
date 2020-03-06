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