import React, { Component } from 'react'
import { View, TextView, Button } from 'react-native'
import BaseComponent from './../../base/components/BaseComponent'

export class CustomComponentBase extends BaseComponent {
    constructor(props) {
        super(props)
    }

    keyExtractor = (item, index) => index.toString()

    renderItemDefault = () => {
        return (<View>
            <TextView>renderItemDefault</TextView>
        </View>)
    }

    renderFooterButton = () => {
        return (
            <Button>LoadMore</Button>
        )
    }
}