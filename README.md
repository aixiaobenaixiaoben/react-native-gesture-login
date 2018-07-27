# React Native Gesture Login
[![npm package](https://img.shields.io/npm/v/react-native-gesture-login.svg?style=flat-square)](https://www.npmjs.com/package/react-native-gesture-login)
[![npm download](https://img.shields.io/npm/dm/react-native-gesture-login.svg?style=flat-square)](https://www.npmjs.com/package/react-native-gesture-login)
[![platform](https://img.shields.io/badge/platform-iOS%20Android-blue.svg?style=flat-square)](https://github.com/aixiaobenaixiaoben/react-native-gesture-login)
[![react native](https://img.shields.io/badge/React%20Native-%3E%3Dv0.40-blue.svg?style=flat-square)](https://facebook.github.io/react-native/)
[![issues](https://img.shields.io/github/issues/aixiaobenaixiaoben/react-native-gesture-login.svg?style=flat-square)](https://github.com/aixiaobenaixiaoben/react-native-gesture-login/issues?q=is%3Aopen)
[![license](https://img.shields.io/github/license/aixiaobenaixiaoben/react-native-gesture-login.svg?style=flat-square)](https://github.com/aixiaobenaixiaoben/react-native-gesture-login/blob/master/LICENSE)

A gesture password component for React Native.

![image](https://github.com/aixiaobenaixiaoben/react-native-gesture-login/raw/master/assets/1.png)

![image](https://github.com/aixiaobenaixiaoben/react-native-gesture-login/raw/master/assets/2.png)

![image](https://github.com/aixiaobenaixiaoben/react-native-gesture-login/raw/master/assets/3.png)

![image](https://github.com/aixiaobenaixiaoben/react-native-gesture-login/raw/master/assets/4.png)

![image](https://github.com/aixiaobenaixiaoben/react-native-gesture-login/raw/master/assets/5.png)


## Features
* Supports both iOS and Android.
* Depends on react, react-native, prop-types.
* Configurable UI style.


## Install
    npm install --save react-native-gesture-login
    npm install --save prop-types
    or
    yarn add react-native-gesture-login
    yarn add prop-types


## Properties

Gesture

Property | Type | Required | Description
-------- | ---- | -------- | -----------
width | number | No | width of the gesture area
height | number | No | height of the gesture area
clearTime | number | No | Time(ms) between onRelease and onClear
lineStyle | ViewPropTypes.style | No | style of line
circleStyle | ViewPropTypes.style | No | style of circle
centerStyle | ViewPropTypes.style | No | style of circle's center
linedCircleStyle | ViewPropTypes.style | No | style of lined circle
linedCenterStyle | ViewPropTypes.style | No | style of lined circle's center
onTouch | func | No | the function triggered when touch first circle
onRelease | func | No | the function triggered when release screen
onClear | func | No | the function triggered when gesture area is reset

GesturePad

Property | Type | Required | Description
-------- | ---- | -------- | -----------
width | number | No | width of the gesture pad area
height | number | No | height of the gesture pad area
sequence | string | No | password string only contains 1-9
circleStyle | ViewPropTypes.style | No | style of circle
centerStyle | ViewPropTypes.style | No | style of circle's center
linedCircleStyle | ViewPropTypes.style | No | style of lined circle
linedCenterStyle | ViewPropTypes.style | No | style of lined circle's center


## Demo
[GestureDemo](https://github.com/aixiaobenaixiaoben/react-native-gesture-login/blob/master/GestureDemo.js)


## Contributing
We welcome all contributions. You can submit any ideas as [pull requests](https://github.com/aixiaobenaixiaoben/react-native-gesture-login/pulls) or as a [GitHub issue](https://github.com/aixiaobenaixiaoben/react-native-gesture-login/issues).

