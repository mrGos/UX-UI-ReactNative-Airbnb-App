import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { CustomComponentBase } from './../../CustomComponentBase'

export default class RoomItem extends CustomComponentBase {
    constructor(props) {
        super(props)
    }

    render() {
        const { item } = this.props
        return (
            item ? this.renderItemDefault :
                <View>
                    <Text> textInComponent </Text>
                </View>
        )
    }
}