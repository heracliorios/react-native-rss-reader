import React from 'react';
import { StackNavigator } from 'react-navigation';
import {
    Text,
    View,
    StyleSheet,
    Platform
} from 'react-native';

import Feed from '../feed';
import Footer from '../footer';
import Pinned from '../pinned';

const navigationOptions = Platform.select({
    ios: {
        // headerMode: 'float',
        mode: 'modal',
    },
    android: {
        // headerMode: 'screen'
    }
});

export default StackNavigator(
    {
        Feed: {
            screen: Feed
        },
        Pinned: {
            screen: Pinned
        },
    },
    {
        initialRouteName: 'Feed',
        headerMode: 'none',
        ...navigationOptions
    }
);
