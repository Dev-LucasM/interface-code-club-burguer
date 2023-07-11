import { Link } from 'react-router-dom'

import styled from 'styled-components'

export const Container = styled.div`
  background-color: #3c3c3c;
  box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.15);
  width: 300px;
  top: 0;
  left: 0;

  hr {
    margin: 90px 15px;
    background: #e9ecef;
  }
`

export const ContainerItems = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  border-radius: 2px;
  background-color: #565656;
  margin: 8px;
  padding-left: 20px;

  .icon {
    color: #fff;
  }
`

export const ListLink = styled(Link)`
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
  margin-left: 8px;
`
