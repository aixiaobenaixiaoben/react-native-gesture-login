import React, {Component} from "react"
import {StyleSheet, Text, View} from "react-native"
import {Gesture, GesturePad} from "./index"
import {COLOR_RED, COLOR_RED_02, COLOR_RED_04} from "./utils/Constants"


class GestureDemo extends Component {

  state = {
    password: '',
    title: 'Please input your password.',
    isWrong: false,
  }

  onRelease = (password) => {
    if (this.state.password === '') {

      if (password.length < 4) {
        this.setState({
          title: 'The length of your password should be at least 4.',
          isWrong: true,
        })
        return
      }

      this.setState({
        password,
        title: 'Please input your password secondly.',
      })

    } else if (this.state.password.length > 0) {

      if (this.state.password === password) {
        this.setState({
          title: 'Your password is set to ' + password,
        })

      } else {
        this.setState({
          password: '',
          title: 'Not the same password, try again.',
          isWrong: true,
        })
      }
    }
  }

  onClear = (password) => {
    if (this.state.password === '') {
      this.setState({
        title: 'Please input your password.',
        isWrong: false,
      })
    }
  }

  render() {
    const {password, title, isWrong} = this.state
    let textStyle, circleStyle, centerStyle, lineStyle
    if (isWrong) {
      textStyle = style.text
      circleStyle = style.circle
      centerStyle = style.center
      lineStyle = style.line
    }
    return (
      <View style={style.view}>
        <GesturePad sequence={password}/>
        <Text style={textStyle}>{title}</Text>
        <Gesture
          clearTime={1000}
          linedCircleStyle={circleStyle}
          linedCenterStyle={centerStyle}
          lineStyle={lineStyle}
          onRelease={this.onRelease}
          onClear={this.onClear}
        />
      </View>
    )
  }
}

const style = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  circle: {
    backgroundColor: COLOR_RED_02,
    borderColor: COLOR_RED_04,
  },
  center: {
    backgroundColor: COLOR_RED,
  },
  line: {
    backgroundColor: COLOR_RED,
  },
  text: {
    color: COLOR_RED,
  }
})

export default GestureDemo
