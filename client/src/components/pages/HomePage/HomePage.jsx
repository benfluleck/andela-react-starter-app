import React from 'react'
import axios from 'axios'

import styled from 'styled-components'

class HomePage extends React.Component {
  constructor (props) {
    super(props)

    this.getAllCharacters = () => {
      return axios.get('https://rickandmortyapi.com/api/character/?page=2')
    }
  }
  render () {
    const result = async () => {
      const result = await this.getAllCharacters()
      console.log(result)
    }
    console.log(result())

    return (<h1>This is the HomePage</h1>)
  }
}

export default HomePage
