import React from 'react'

import LogoutIcon from '@mui/icons-material/Logout'
import PropTypes from 'prop-types'

import { useUser } from '../../hooks/UserContext'
import listLinks from './menu-list'
import { Container, ContainerItems, ListLink } from './styles'

export function SideMenuAdmin({ pathname }) {
  const { logout } = useUser()
  return (
    <Container>
      <hr />
      {listLinks.map(item => (
        <ContainerItems key={item.id} isActive={pathname === item.link}>
          <item.icon className="icon" />
          <ListLink to={item.link}>{item.label}</ListLink>
        </ContainerItems>
      ))}
      <hr />
      <ContainerItems style={{ position: 'absolute', bottom: '30px' }}>
        <LogoutIcon className="icon" />
        <ListLink to="/login" onClick={logout}>
          Sair
        </ListLink>
      </ContainerItems>
    </Container>
  )
}

SideMenuAdmin.propTypes = {
  pathname: PropTypes.string
}
