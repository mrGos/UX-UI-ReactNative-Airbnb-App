import React, { Component } from 'react'
import { Text, View,FlatList } from 'react-native'
import styles from './../../../base/styles/customStyle'
import BalanceList from './../../components/shared/lists/BalanceList'

import * as dataPlayground from './../../common/playgrounds/data'

export default class HomeView extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        this.setState({ data: dataPlayground.homeData });
    }

    render() {
        return (
            <View >
                <Text>ADASDASDASDASDDDDDDDDDDDDDDDDDDDDDDD</Text>
                <BalanceList data={this.state.data} inpStyle={{ flex: 1, backgroundColor: 'red' }} />
            </View>
        )
    }
}
