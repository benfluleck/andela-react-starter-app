import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const HomePage = ({ name }) => (
  <HomePage.Container>
    {name}
  </HomePage.Container>
)

HomePage.defaultProps = {
  name: 'Test Prop Name'
}

HomePage.propTypes = {
  name: PropTypes.string.isRequired
}

HomePage.Container = styled.div`
  font-size: ${props => props.theme.fontSize.md};

`

export default HomePage
