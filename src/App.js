import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './componets/Navbar'
import Home from './componets/Home'
import Login1 from './componets/Login1'
// import Login from './componets/Login'
import Register from './componets/Register'
import Dashboard from './componets/Dashboard'
import  PrivateRoute from './componets/PrivateRoute'
const App = () => {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <PrivateRoute exact path='/dash' component={Dashboard} />
        <Route exact path='/' component={Home}></Route>
        <Route path='/login' component={Login1}></Route>
        <Route path='/register' component={Register}></Route>
        {/* <Route path='/dashboard' component={Dashboard}></Route> */}

      </Switch>
    </Router>
  )
}

export default App

