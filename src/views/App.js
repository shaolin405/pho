import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components'

import theme from '../theme/'
import Header from '../components/Header'

const Wrapper = styled.div`
  text-align: center;
  font-family: sans-serif;
`

const Intro = styled.p`
  font-size: large;
  code {
    font-size: 1.3rem;
  }
`

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Header />
          <Intro>
            Bootstrapped with <code>create-react-app</code>.
          </Intro>
          <Intro>
            Components styled with <code>styled-components</code>
          </Intro>
        </Wrapper>
      </ThemeProvider>
    )
  }
}

export default App
