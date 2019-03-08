import React, { Component } from "react"
import styles from '../styles/styles'

const initialContext = {
  width: window.innerHeight,
  height: window.innerHeight,
}

export const AppContext = React.createContext(initialContext)

class RootWrapper extends Component {
  static contextType = AppContext

  constructor() {
    super()
    const isMobile = this.isMobile()
    this.state = {
      context: {
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
        isMobile
      },
    }
  }

  componentDidMount = () => {
    window.addEventListener("resize", () => {
      let isMobile = this.isMobile()
      this.setState({
        ...this.state,
        context: { screenWidth: window.innerWidth, screenHeight: window.innerHeight, isMobile },
      })
    })
  }

  isMobile = () => {
    return window.innerWidth < styles.breakpoints.sm
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
