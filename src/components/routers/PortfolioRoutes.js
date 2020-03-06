import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from '../Home'
import About from '../About'
import Contact from '../Contact'
import Erro from '../Error'

const Routes = ()=>{
    return (
        <div>
            <Switch>
                <Route path='/home' component={Home} exact={true} />
                <Route path='/about' component={About} exact={true} />
                <Route path='/contact' component={Contact} exact={true} />
                <Route  component={Erro} />
            </Switch>

        </div>
    )
}
export default Routes
