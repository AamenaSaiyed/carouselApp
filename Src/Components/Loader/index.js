import React from "react";

import { ActivityIndicator, StyleSheet, View } from "react-native";
import Colors from "../../Theme/Colors";

export default function Index () {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="small" color={Colors.POLICE_BLUE}/>
            </View>
        );
}
const styles = StyleSheet.create({
    container: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        opacity: 0.7,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
    }
});