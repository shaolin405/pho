import 'normalize.css'
import './index.css'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import store, { history } from './store'

import App from './app'
import routes from './routes'
import registerServiceWorker from './registerServiceWorker'

const target = document.querySelector('#root')

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App routes={routes} />
    </ConnectedRouter>
  </Provider>,
  target
)
registerServiceWorker()
