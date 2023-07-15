import React from 'react'
import { useLocation } from 'react-router-dom'

import LogoutIcon from '@mui/icons-material/Logout'

import { useUser } from '../../hooks/UserContext'
import listLinks from './menu-list'
import { Container, ContainerItems, ListLink } from './styles'

export function SideMenuAdmin() {
  const { pathname } = useLocation()
  const { logout } = useUser()
  return (
    <Container>
      <hr />
      {listLinks.map(item => (
        <ContainerItems
          key={item.id}
          className={pathname === item.link ? 'active' : ''}
        >
          <item.icon className="icon" />
          <ListLink to={item.link}>{item.label}</ListLink>
        </ContainerItems>
      ))}
      <hr />
      <ContainerItems style={{ position: 'fixed', bottom: '30px' }}>
        <LogoutIcon className="icon" />
        <ListLink to="/login" onClick={logout}>
          Sair
        </ListLink>
      </ContainerItems>
    </Container>
  )
}
