import React, { Fragment } from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import GlobalStyle from '<styles>/global'
import BaseRoute from '<pages>/index.jsx'
import ThemeWrapper from '<styles>/ThemeWrapper/ThemeWrapper'

const App = () => (
  <ThemeWrapper>
    <Fragment>
      <GlobalStyle />
      <Router>
        <BaseRoute />
      </Router>
    </Fragment>
  </ThemeWrapper>
)

export default App

render(<App />, document.getElementById('app'))
