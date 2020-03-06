import React from 'react'


const Edit = (props)=>{
    console.log(props)
    return (
        <div>
            Editting the page for Item {props.match.params.id}
        </div>
    )
}
export default Edit