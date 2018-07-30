import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Counter from 'components/Counter'

const Home = props => (
  <section>
    <h1>Home</h1>
    <p>Welcome home!</p>
    <Counter />
  </section>
)

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changePage: () => push('/about')
    },
    dispatch
  )

export default connect(
  null,
  mapDispatchToProps
)(Home)
