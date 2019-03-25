import { lighten } from 'polished'

const primary = '#4C0E35'
const mediumGrey = '#d3d1d1'

const colors = {
  primary,
  primaryLowLighten: lighten(0.2, primary),
  primaryHighLighten: lighten(0.5, primary),
  secondary: '#4C3D54',
  white: '#fff',
  whiteLighten: lighten(0.4, '#fff'),
  dark: '#4C3D54',
  lightgrey: '#f7f7f7',
  lightdarkerGrey: '#efefef',
  mediumGrey: mediumGrey,
  mediumGreyLighten: lighten(0.5, mediumGrey),
  darkgrey: '#333333',
  green: '#3cba54',
  normalBoxShadow: '2px 4px 30px 0px rgba(165,165,165,0.3)'
}

export default colors
