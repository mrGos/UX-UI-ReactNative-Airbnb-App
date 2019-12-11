import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { CustomComponentBase } from './../../CustomComponentBase'

export default class DestItem extends Component {
  render() {
      const {item} = this.props
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}