import React from "react";
import { View, Text, TouchableWithoutFeedback, StyleSheet } from "react-native";

const listItem = (props) => (
    <TouchableWithoutFeedback onPress={props.onItemPressed}>
        <View style={styles.listItem} onPress={props.onItemPressed}>
            <Text>{props.placeName}</Text>
        </View>
    </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        marginBottom: 5,
        padding: 10,
        backgroundColor: "#eee",
        flexDirection: "row",
        alignItems: "center"
    }
});

export default listItem;