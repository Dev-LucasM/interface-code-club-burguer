import React from 'react'

import listLinks from './menu-list'
import { Container, ContainerItems, ListLink } from './styles'

export function SideMenuAdmin() {
  return (
    <Container>
      <hr />
      {listLinks.map(item => (
        <ContainerItems key={item.id}>
          <item.icon className="icon" />
          <ListLink to={item.link}>{item.label}</ListLink>
        </ContainerItems>
      ))}
    </Container>
  )
}
