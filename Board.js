import React, {Component} from "react"
import {PanResponder, View, ViewPropTypes} from "react-native"
import PropTypes from "prop-types"

import Line from "./Line"
import style from "./styles/Board"
import Dot from "./Dot"
import type {Point} from "./Constants"
import {CLEAR_TIME, DIMENSION_HEIGHT, DIMENSION_WIDTH} from "./Constants"
import {distanceOfPoint} from "./Utils"

class Board extends Component {

  state = {
    start: {x: 0, y: 0},
    current: {x: 0, y: 0},
    points: {A: {}, B: {}, C: {}, D: {}, E: {}, F: {}, G: {}, H: {}, I: {}},
    lines: [],
  }

  width
  height
  _panResponder
  ref
  pageX
  pageY
  sequence = ''

  constructor(props: any) {
    super(props)

    const {width = DIMENSION_WIDTH, height = DIMENSION_HEIGHT} = this.props
    this.width = width
    this.height = height

    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => false,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => false,
      onPanResponderGrant: (evt, gestureState) => {
        this.onGrant()
      },
      onPanResponderMove: (evt, gestureState) => {
        this.onMove(evt)
      },
      onPanResponderRelease: (evt, gestureState) => {
        this.onRelease()
      },
    })
  }

  componentDidMount() {
    setTimeout(() => {
      this.ref.measure((frameX, frameY, width, height, pageX, pageY) => {
        this.pageX = pageX
        this.pageY = pageY
      })
    }, 0)
  }

  onGrant = () => {
    const { onTouch = () => {}} = this.props
    onTouch()
  }

  onMove = (event) => {
    let current = {
      x: event.nativeEvent.pageX - this.pageX,
      y: event.nativeEvent.pageY - this.pageY,
    }
    if (current.x < 0 || current.x > this.width || current.y < 0 || current.y > this.height) {
      return
    }

    let {start, points, lines} = this.state
    for (let id in points) {
      let point = points[id]
      if (!point.lined) {
        const lined = distanceOfPoint(current, point.center) <= point.radius
        if (lined) {
          point.lined = true
          start = point.center
          this.sequence += id.charCodeAt() - 64

          /** create line */
          if (lines.length > 0) {
            lines[lines.length - 1].end = point.center
          }
          let line = {id, start: point.center}
          lines.push(line)
        }
      }
    }

    if (lines.length > 0) {
      this.setState({start, current, points, lines})
    }
  }

  onRelease = () => {
    this.setState({current: this.state.start})

    let {
      clearTime = CLEAR_TIME,
      onRelease = (seq) => {},
      onClear = (seq) => {},
    } = this.props
    onRelease(this.sequence)

    setTimeout(() => {
      onClear(this.sequence)

      let origin = {x: 0, y: 0}
      const {points} = this.state
      for (let id in points) {
        points[id].lined = false
      }
      this.setState({
        start: origin,
        current: origin,
        points,
        lines: [],
      })
      this.sequence = ''
    }, clearTime)
  }

  renderLines = () => {
    let elements = []
    const {lines} = this.state
    for (let line of lines) {
      if (line.end !== undefined) {
        elements.push(<Line tail key={line.id} start={line.start} end={line.end} style={this.props.lineStyle}/>)
      }
    }
    return elements
  }

  reportCenter = (id: string, center: Point, radius: number) => {
    if (['D', 'E', 'F'].indexOf(id) !== -1) {
      center.y += this.height / 3
    }
    if (['G', 'H', 'I'].indexOf(id) !== -1) {
      center.y += this.height * 2 / 3
    }
    const {points} = this.state
    points[id] = {
      center: center,
      radius: radius,
      lined: false,
    }
    this.setState({points})
  }

  render() {
    const {lineStyle, circleStyle, centerStyle, linedCircleStyle, linedCenterStyle} = this.props
    const {A, B, C, D, E, F, G, H, I} = this.state.points

    return (
      <View {...this._panResponder.panHandlers} style={{width: this.width, height: this.height}}
            ref={view => this.ref = view}>

        {this.renderLines()}
        <Line start={this.state.start} end={this.state.current} style={lineStyle}/>

        <View style={style.row}>
          <Dot id='A' lined={A.lined} reportCenter={this.reportCenter} circleStyle={circleStyle}
               centerStyle={centerStyle} linedCircleStyle={linedCircleStyle} linedCenterStyle={linedCenterStyle}/>
          <Dot id='B' lined={B.lined} reportCenter={this.reportCenter} circleStyle={circleStyle}
               centerStyle={centerStyle} linedCircleStyle={linedCircleStyle} linedCenterStyle={linedCenterStyle}/>
          <Dot id='C' lined={C.lined} reportCenter={this.reportCenter} circleStyle={circleStyle}
               centerStyle={centerStyle} linedCircleStyle={linedCircleStyle} linedCenterStyle={linedCenterStyle}/>
        </View>

        <View style={style.row}>
          <Dot id='D' lined={D.lined} reportCenter={this.reportCenter} circleStyle={circleStyle}
               centerStyle={centerStyle} linedCircleStyle={linedCircleStyle} linedCenterStyle={linedCenterStyle}/>
          <Dot id='E' lined={E.lined} reportCenter={this.reportCenter} circleStyle={circleStyle}
               centerStyle={centerStyle} linedCircleStyle={linedCircleStyle} linedCenterStyle={linedCenterStyle}/>
          <Dot id='F' lined={F.lined} reportCenter={this.reportCenter} circleStyle={circleStyle}
               centerStyle={centerStyle} linedCircleStyle={linedCircleStyle} linedCenterStyle={linedCenterStyle}/>
        </View>

        <View style={style.row}>
          <Dot id='G' lined={G.lined} reportCenter={this.reportCenter} circleStyle={circleStyle}
               centerStyle={centerStyle} linedCircleStyle={linedCircleStyle} linedCenterStyle={linedCenterStyle}/>
          <Dot id='H' lined={H.lined} reportCenter={this.reportCenter} circleStyle={circleStyle}
               centerStyle={centerStyle} linedCircleStyle={linedCircleStyle} linedCenterStyle={linedCenterStyle}/>
          <Dot id='I' lined={I.lined} reportCenter={this.reportCenter} circleStyle={circleStyle}
               centerStyle={centerStyle} linedCircleStyle={linedCircleStyle} linedCenterStyle={linedCenterStyle}/>
        </View>

      </View>
    )
  }
}

Board.proptypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  clearTime: PropTypes.number,
  lineStyle: ViewPropTypes.style,
  circleStyle: ViewPropTypes.style,
  centerStyle: ViewPropTypes.style,
  linedCircleStyle: ViewPropTypes.style,
  linedCenterStyle: ViewPropTypes.style,

  onTouch: PropTypes.func,
  onRelease: PropTypes.func,
  onClear: PropTypes.func,
}

Board.defaultProps = {
  width: DIMENSION_WIDTH,
  height: DIMENSION_HEIGHT,
  clearTime: CLEAR_TIME,
}

export default Board