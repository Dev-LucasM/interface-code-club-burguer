import React from 'react'
import { Routes as Switch, Route, BrowserRouter } from 'react-router-dom'

import Login from '../containers/Login'
import Register from '../containers/Register'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
