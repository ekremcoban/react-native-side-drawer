import React from "react";
import { View, Text, StyleSheet} from "react-native";

const detailPlaceScreen = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.textContainer}>{props.selectedPlace.name}</Text>
            <Text>{props.selectedPlace.key}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "80%",
        backgroundColor: "red"
    },
    textContainer: {
        fontSize: 30
    }
});

export default detailPlaceScreen;