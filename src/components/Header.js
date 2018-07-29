import React from 'react'
import styled from 'styled-components'
import { color, space } from 'styled-system'

const Nav = styled.nav`
  ${[color, space]};
`

const Title = styled.h1`
  margin: 0;
`

const Header = () => (
  <Nav color={'white'} bg={'purple'} p={[4, 5, 6]}>
    <Title>Welcome to React</Title>
  </Nav>
)

export default Header
