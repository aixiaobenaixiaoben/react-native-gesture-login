import React, {Component} from "react"
import {View, ViewPropTypes} from "react-native"
import PropTypes from "prop-types"

import style from "./styles/Pad"
import Dot from "./Dot"
import {DIMENSION_PAD_HEIGHT, DIMENSION_PAD_WIDTH} from "./Constants"

class Pad extends Component {

  handle = (sequence, points) => {
    let chars = sequence.split('')
    for (let char of chars) {
      let key = String.fromCharCode(64 + parseInt(char))
      points[key] = true
    }
  }

  render() {
    const {
      sequence = '',
      width = DIMENSION_PAD_WIDTH,
      height = DIMENSION_PAD_HEIGHT,
      circleStyle,
      centerStyle,
      linedCircleStyle,
      linedCenterStyle,
    } = this.props

    let points = {}
    this.handle(sequence, points)

    return (
      <View style={{width: width, height: height}}>

        <View style={style.row}>
          <Dot lined={points.A} circleStyle={[style.circle, circleStyle]} centerStyle={[style.center, centerStyle]}
               linedCircleStyle={linedCircleStyle} linedCenterStyle={linedCenterStyle}/>
          <Dot lined={points.B} circleStyle={[style.circle, circleStyle]} centerStyle={[style.center, centerStyle]}
               linedCircleStyle={linedCircleStyle} linedCenterStyle={linedCenterStyle}/>
          <Dot lined={points.C} circleStyle={[style.circle, circleStyle]} centerStyle={[style.center, centerStyle]}
               linedCircleStyle={linedCircleStyle} linedCenterStyle={linedCenterStyle}/>
        </View>

        <View style={style.row}>
          <Dot lined={points.D} circleStyle={[style.circle, circleStyle]} centerStyle={[style.center, centerStyle]}
               linedCircleStyle={linedCircleStyle} linedCenterStyle={linedCenterStyle}/>
          <Dot lined={points.E} circleStyle={[style.circle, circleStyle]} centerStyle={[style.center, centerStyle]}
               linedCircleStyle={linedCircleStyle} linedCenterStyle={linedCenterStyle}/>
          <Dot lined={points.F} circleStyle={[style.circle, circleStyle]} centerStyle={[style.center, centerStyle]}
               linedCircleStyle={linedCircleStyle} linedCenterStyle={linedCenterStyle}/>
        </View>

        <View style={style.row}>
          <Dot lined={points.G} circleStyle={[style.circle, circleStyle]} centerStyle={[style.center, centerStyle]}
               linedCircleStyle={linedCircleStyle} linedCenterStyle={linedCenterStyle}/>
          <Dot lined={points.H} circleStyle={[style.circle, circleStyle]} centerStyle={[style.center, centerStyle]}
               linedCircleStyle={linedCircleStyle} linedCenterStyle={linedCenterStyle}/>
          <Dot lined={points.I} circleStyle={[style.circle, circleStyle]} centerStyle={[style.center, centerStyle]}
               linedCircleStyle={linedCircleStyle} linedCenterStyle={linedCenterStyle}/>
        </View>

      </View>
    )
  }
}

const sequenceCheck = (props, propName, componentName) => {
  const reg = /^[1-9]*$/
  if (!reg.test(props[propName])) {
    return new Error(
      'Invalid prop `' + propName + '` supplied to' +
      ' `' + componentName + '`, expected `number only contains [1-9]`.'
    )
  }
}

Pad.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  circleStyle: ViewPropTypes.style,
  centerStyle: ViewPropTypes.style,
  linedCircleStyle: ViewPropTypes.style,
  linedCenterStyle: ViewPropTypes.style,
  sequence: sequenceCheck,
}

Pad.defaultProps = {
  width: DIMENSION_PAD_WIDTH,
  height: DIMENSION_PAD_HEIGHT,
  sequence: '',
}

export default Pad