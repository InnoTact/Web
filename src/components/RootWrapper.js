import React, { Component } from "react"

const initialContext = {
  width: window.innerHeight,
  height: window.innerHeight,
}

export const AppContext = React.createContext(initialContext)

class RootWrapper extends Component {
  static contextType = AppContext

  constructor() {
    super()
    this.state = {
      context: {
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
      },
    }
  }

  componentDidMount = () => {
    window.addEventListener("resize", () => {
      this.setState({
        ...this.state,
        context: { screenWidth: window.innerWidth, screenHeight: window.innerHeight },
      })
    })
  }

  componentWillUnmount = () => {
    window.removeEventListener("resize")
  }

  render() {
    const { children } = this.props

    return (
      <AppContext.Provider value={this.state.context}>
        {children}
      </AppContext.Provider>
    )
  }
}

export default RootWrapper
