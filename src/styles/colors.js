import { lighten } from 'polished'

const primary = '#ff7400'
const primaryHigher = '#ff9a00'
const primaryLower = '#ff4d00'

const mediumGrey = '#d3d1d1'

/*
ljusare färgschema mycket orange:
primary: #ff7400
primHigher: #ff9a00
primLower: #ff4d00

bra primary: #fd6A02/#ff7400/
*/

const colors = {
  primaryHigher,
  primary,
  primaryLowLighten: lighten(0.2, primary),
  primaryHighLighten: lighten(0.5, primary),
  primaryLower,
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
