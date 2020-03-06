import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Dashboard from "../ComponentDahsboardPage";
import Create from '../Create'
import Edit from '../Edit'
import Help from '../Help'
import Error from '../Error'

const AppRoutes = ()=>{
    return (
        <Switch>
            
            
            <Route to='/edit' component={Edit} />
            <Route to='/create' component={Create} />
            <Route to='/help' component={Help}     />
            <Route  component={Error} />
            <Route to='/' component={Dashboard} exact={true}/>

        </Switch>
    )
}
export default AppRoutes