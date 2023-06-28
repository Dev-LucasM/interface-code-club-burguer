import React from 'react'
import { Routes as Switch, Route, BrowserRouter } from 'react-router-dom'

import { Home, Login, Register, Products } from '../containers'
import PrivateRoute from './private-routes'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        <Route
          path="/"
          element={
            <PrivateRoute redirectTo="/login">
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/produtos"
          element={
            <PrivateRoute redirectTo="/login">
              <Products />
            </PrivateRoute>
          }
        />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
