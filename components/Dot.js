import React, {Component} from "react"
import {View, ViewPropTypes} from "react-native"
import PropTypes from "prop-types"

import style from "../styles/Dot"


class Dot extends Component {

  ref
  timer
  lined = false
  linedCircleStyle
  linedCenterStyle

  shouldComponentUpdate(nextProps, nextState) {
    const {lined = false, linedCircleStyle, linedCenterStyle} = nextProps
    const oldLined = this.lined
    this.lined = lined

    const oldLinedCircleStyle = this.linedCircleStyle
    this.linedCircleStyle = linedCircleStyle

    const oldLinedCenterStyle = this.linedCenterStyle
    this.linedCenterStyle = linedCenterStyle

    return lined !== oldLined || linedCircleStyle !== oldLinedCircleStyle || linedCenterStyle !== oldLinedCenterStyle
  }

  componentDidMount() {
    const {id, reportCenter} = this.props
    if (reportCenter !== undefined) {
      this.timer = setTimeout(() => {
        this.ref.measure((frameX, frameY, width, height, pageX, pageY) => {
          const radius = 0.5 * width
          const center = {x: frameX + radius, y: frameY + radius}
          reportCenter(id, center, radius)
        })
      }, 0)
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timer)
  }

  render() {
    const {lined = false, circleStyle, centerStyle, linedCircleStyle, linedCenterStyle} = this.props
    const circleLinedStyle = lined ? [style.circleLined, linedCircleStyle] : []
    const centerLinedStyle = lined ? [style.centerLined, linedCenterStyle] : []

    return (
      <View style={[style.circle, circleStyle, ...circleLinedStyle]} ref={view => this.ref = view}>
        <View style={[style.center, centerStyle, ...centerLinedStyle]}>
        </View>
      </View>
    )
  }

}

Dot.propTypes = {
  id: PropTypes.string,
  lined: PropTypes.bool,
  circleStyle: ViewPropTypes.style,
  centerStyle: ViewPropTypes.style,
  linedCircleStyle: ViewPropTypes.style,
  linedCenterStyle: ViewPropTypes.style,

  reportCenter: PropTypes.func,
}

export default Dot