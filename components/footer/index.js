import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableHighlight
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    button: {
        padding: 8,
    }
});

export default class Component extends React.Component {
    constructor() {
        super();

        this.onPress = this.onPress.bind(this);
    }

    onPress(type) {
        const message = `GO TO ${type.toUpperCase()}`;

        switch (type) {
            case 'news':
                alert(message);
                break;
            case 'saved':
                alert(message);
                break;
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight
                    style={styles.button}
                    onPress={() => { this.onPress('news') }}
                    underlayColor="steelblue"
                >
                    <Text>
                        News
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={styles.button}
                    onPress={() => { this.onPress('saved') }}
                    underlayColor="steelblue"
                >
                    <Text>
                        Saved
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
};
