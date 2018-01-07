import React, { Component } from 'react'
import { render } from 'react-dom'
import MainFeatures from './public/components/mainFeatures'

class Main extends Component {

  render() {
    return (
      <div>
        <MainFeatures />
      </div>
    )
  }
}

render(<Main />, document.getElementById('app'))