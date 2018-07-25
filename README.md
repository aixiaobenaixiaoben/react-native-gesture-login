# React Native Gesture Login
A gesture password component for React Native.

![image](https://github.com/aixiaobenaixiaoben/react-native-gesture-login/raw/master/assets/1.png)

![image](https://github.com/aixiaobenaixiaoben/react-native-gesture-login/raw/master/assets/2.png)

![image](https://github.com/aixiaobenaixiaoben/react-native-gesture-login/raw/master/assets/3.png)

![image](https://github.com/aixiaobenaixiaoben/react-native-gesture-login/raw/master/assets/4.png)

![image](https://github.com/aixiaobenaixiaoben/react-native-gesture-login/raw/master/assets/5.png)


# Features
* Supports both iOS and Android.
* Depends on react, react-native, prop-types.
* Configurable UI style.


## Install
    yarn add react-native-gesture-login
    yarn add prop-types


## Properties

###Gesture

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

###GesturePad

Property | Type | Required | Description
-------- | ---- | -------- | -----------
width | number | No | width of the gesture area
height | number | No | height of the gesture area
sequence | string | No | password string only contains 1-9
circleStyle | ViewPropTypes.style | No | style of circle
centerStyle | ViewPropTypes.style | No | style of circle's center
linedCircleStyle | ViewPropTypes.style | No | style of lined circle
linedCenterStyle | ViewPropTypes.style | No | style of lined circle's center


## Demo
[GestureDemo](https://github.com/aixiaobenaixiaoben/react-native-gesture-login/blob/master/GestureDemo.js)


## Contributing
We welcome all contributions. You can submit any ideas as [pull requests](https://github.com/aixiaobenaixiaoben/react-native-gesture-login/pulls) or as a [GitHub issue](https://github.com/aixiaobenaixiaoben/react-native-gesture-login/issues).

