import React from 'react';
import axios from 'axios';
import xml2js from 'react-native-xml2js';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    TouchableHighlight
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'powderblue',
    },
    record: {
        padding: 8,
        borderBottomColor: '#bbb',
        borderBottomWidth: 1,
    },
    title: {
        fontSize: 12,
    },
});

export default class Component extends React.Component {
    constructor() {
        super();

        this.state = {
            records: [],
        }

        this.feed = this.feed.bind(this);
        this.jsx = this.jsx.bind(this);
        this.onPress = this.onPress.bind(this);
    }

    feed(xml) {
        return new Promise((resolve, reject) => {
            const parser = xml2js.Parser();

            parser.parseString(xml, (error, result) => {
                if (error) {
                    reject();
                } else {
                    const records = result.rss.channel.reduce((array, channel) => {
                        array = array.concat(channel.item);

                        return array;
                    }, []);

                    resolve(records);
                }
            });
        });
    }

    jsx(records) {
        if (records.length === 0) {
            return (
                <Text>
                    An error has occurred in fetching rss feed.
                </Text>
            );
        }

        return records.map((object, index) => {
            const title = object.title.reduce((value, item) => {
                if (item) {
                    value = item;
                }

                return value;
            }, 'No Title');

            return (
                <TouchableHighlight
                    key={index}
                    style={styles.record}
                    underlayColor="steelblue"
                    onPress={this.onPress}
                >
                    <Text style={styles.title}>
                        {title}
                    </Text>
                </TouchableHighlight>
            );
        });
    }

    onPress() {
        return;
    }

    componentWillMount() {
        axios.get('https://news.ycombinator.com/rss').then((response) => {
            this.feed(response.data).then((records) => {
                this.setState({
                    records: this.jsx(records),
                })
            });
        });
    }

    render() {
        console.log('DEBUG::this.records', this.records);

        return (
            <ScrollView style={styles.container}>
                {this.state.records}
            </ScrollView>
        );
    }
};
