import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';

const generate = (props) => (
    <TouchableWithoutFeedback
        onPress={() => {
            props.add()
        }}
        onLongPress={() => alert('Long Touched my studio')}
    >
        <View style={styles.generate}>
            <Text>Add number</Text>
        </View>
    </TouchableWithoutFeedback>
)

const styles = StyleSheet.create({
    generate:{
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#00bcd4',
        width: '100%',
        marginTop: 20
    }
});

export default generate;