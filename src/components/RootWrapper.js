import React, { Component } from "react"

class RootWrapper extends Component {
  render() {
    const { children } = this.props

    return (
      <div>
        {children}
      </div>
    )
  }
}

export default RootWrapper
