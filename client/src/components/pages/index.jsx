import React from 'react'
import { Route } from 'react-router-dom'

import HomePage from './HomePage/HomePage'

const BaseRoute = () => <Route exact path="/" component={HomePage} />

export default BaseRoute
