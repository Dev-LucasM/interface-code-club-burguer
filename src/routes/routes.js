import React from 'react'
import { Routes as Switch, Route, BrowserRouter } from 'react-router-dom'

import paths from '../constants/paths'
import { Home, Login, Register, Products, Cart, Admin } from '../containers'
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
        <Route
          path="/carrinho"
          element={
            <PrivateRoute redirectTo="/login">
              <Cart />
            </PrivateRoute>
          }
        />
        <Route
          path={paths.Order}
          element={
            <PrivateRoute redirectTo="/login">
              <Admin isAdmin />
            </PrivateRoute>
          }
        />
        <Route
          path={paths.Products}
          element={
            <PrivateRoute redirectTo="/login">
              <Admin isAdmin />
            </PrivateRoute>
          }
        />
        <Route
          path={paths.NewProduct}
          element={
            <PrivateRoute redirectTo="/login">
              <Admin isAdmin />
            </PrivateRoute>
          }
        />
        <Route
          path={paths.EditProduct}
          element={
            <PrivateRoute redirectTo="/login">
              <Admin isAdmin />
            </PrivateRoute>
          }
        />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
