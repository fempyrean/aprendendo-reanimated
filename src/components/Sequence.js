/* eslint-disable no-use-before-define */
import React, { useState, useRef } from 'react';
import { Text, View, StyleSheet, Button, StatusBar } from 'react-native';
import { Transitioning, Transition } from 'react-native-reanimated';

export default function Sequence() {
    const transition = (
        <Transition.Sequence>
            <Transition.Out type="scale" />
            <Transition.Change interpolation="easeInOut" />
            <Transition.In type="fade" />
        </Transition.Sequence>
    );

    const [showText, setShowText] = useState(true);
    const ref = useRef();

    return (
        <Transitioning.View
            ref={ref}
            style={styles.centerAll}
            transition={transition}
        >
            <Button
                title="show or hide"
                color="#FF5252"
                onPress={() => {
                    ref.current.animateNextTransition();
                    setShowText(!showText);
                }}
            />
            {showText && (
                <Text style={styles.text}>
                    Tap the above button to hide me, beeeetch!
                </Text>
            )}
        </Transitioning.View>
    );
}

const styles = StyleSheet.create({
    centerAll: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 16,
        margin: 10,
    },
});
