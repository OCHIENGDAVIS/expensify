import React from 'react'
import { NavLink} from 'react-router-dom'


const Header = (props)=>{
    return (
        <div>
            <header>
                <h1>Expensify App</h1>
                <div>
                    <NavLink to='/' activeClassName='active' exact={true}> Login</NavLink>
                    <NavLink to='/dashboard' activeClassName='active' exact={true}> Dashboard</NavLink>
                    <NavLink to='/create' activeClassName='active' exact={true}> Create </NavLink>
                    <NavLink to='/help' activeClassName='active' exact={true}> Help </NavLink>
                    
                </div>
            </header>
        </div>
    )
}

export default Header