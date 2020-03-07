import React from 'react'

const Info = (props)=>{
    return(
        <div>
            <h1>Information</h1>
            <p>The info is {props.info}</p>
        </div>
    )
}

const withAdminWarning  = (WrapedComponent)=>{
    return (props)=>{
        return (
            <div>
                {props.isAdmin ? <p>This is a private message please do not show!</p> : null}
                <WrapedComponent {...props} />

            </div>
        )
    }
}

const isAuthenticated  = (WrapedComponent)=>{
    return (props)=>{
        console.log(props)
        return (
            <div>
                {
                    props.isAuth ? <WrapedComponent  /> : <p>You need to be authenticated to see this message</p>
                }

            </div>
        )
    }

}
const AdminInfo  = withAdminWarning(Info)
const RequireAuthentication = isAuthenticated()
export default AdminInfo