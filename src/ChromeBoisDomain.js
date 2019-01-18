import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {

  handleMouseMove = (e) => {
    const xCoord = e.clientX
    const yCoord = e.clientY
    drawChromeBoiAtCoords(xCoord, yCoord)
  }

  handleKeyDown = (e) => {
    const key = e.key
    if (key === 'a') {
      resize('+')
    }

    if (key === 's'){
      resize('-')
    }
  }

  render() {
    return (
      <canvas
        onMouseMove={this.handleMouseMove}
        onClick={() => {toggleCycling()}}
        onKeyDown={this.handleKeyDown}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
