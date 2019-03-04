import { lighten } from 'polished'

let primary = '#4C3D54'
let mediumGrey = '#d3d1d1'

const colors = {
  primary,
  primaryLowLighten: lighten(0.2, primary),
  primaryHighLighten: lighten(0.5, primary),
  secondary: '#4C3D54',
  white: '#fff',
  dark: '#4C3D54',
  lightgrey: '#f7f7f7',
  mediumGrey,
  mediumGreyLighten: lighten(0.3, mediumGrey),
  darkgrey: '#333333',
  green: '#3cba54',
  normalBoxShadow: '2px 4px 30px 0px rgba(165,165,165,0.3)'
}

export default colors
