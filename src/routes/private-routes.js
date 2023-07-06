import React from 'react'
import { Navigate } from 'react-router-dom'

import PropTypes from 'prop-types'

import { Header } from '../components/Header'

function PrivateRoute({ children, redirectTo }) {
  const user = localStorage.getItem('codeburguer:userData')

  if (children.props.isAdmin && !JSON.parse(user).admin) {
    return <Navigate to="/" />
  }

  return (
    <>
      {!children.props.isAdmin && <Header />}
      {user ? children : <Navigate to={redirectTo} />}
    </>
  )
}

export default PrivateRoute

PrivateRoute.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  redirectTo: PropTypes.string
}
