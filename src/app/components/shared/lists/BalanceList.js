import React, { Component } from 'react'
import { CustomComponentBase } from './../../CustomComponentBase'
import { Text, View, FlatList, SafeAreaView, StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import metrics from './../../../../base/config/metrics'

import { Card } from 'react-native-elements';

const spacing = 10;
const width = (metrics.DEVICE_WIDTH - 4 * 10) / 2;

export default class BalanceList extends CustomComponentBase {
    constructor(props) {
        super(props)
        // this.state={
        //     data:[]
        // }
    }

    render() {
        const { data, inpStyle, item, numColumns, contentContainerStyle, columnWrapperStyle } = this.props  
        return (
            <SafeAreaView>
                <FlatList
                    data={data ? [] : data}
                    renderItem={!item ? this.renderItemDefault : item}
                    keyExtractor={this.keyExtractor}
                    style={!inpStyle ? styles.container : inpStyle}
                    numColumns={!numColumns ? 2 : numColumns}
                    contentContainerStyle={!contentContainerStyle ? styles.list : contentContainerStyle}
                    columnWrapperStyle={!columnWrapperStyle ? styles.column : columnWrapperStyle}
                />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        flexDirection: 'column',
    },
    list: {
        justifyContent: 'space-around',
    },
    column: {
        flexShrink: 1,
    },
    card: {
        width: width,
        margin: spacing,
    },
});
