import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Route } from 'react-router-dom'

import theme from 'theme/'
import Header from 'components/Header'
import Home from './Home'
import About from './About'

const Wrapper = styled.div`
  text-align: center;
  font-family: sans-serif;
`

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Header />

          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Wrapper>
      </ThemeProvider>
    )
  }
}

export default App
