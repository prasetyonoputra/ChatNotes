import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function BottomBarComponent() {
    return (
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <TouchableOpacity style={styles.loginButton}>
                <Image
                    style={{ width: 50, height: 50 }}
                    source={require("../../assets/icons/icon-notification.png")}
                />
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginButton}>
                <Image
                    style={{ width: 50, height: 50 }}
                    source={require("../../assets/icons/icon-peoples.png")}
                />
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginButton}>
                <Image
                    style={{ width: 50, height: 50 }}
                    source={require("../../assets/icons/icon-home.png")}
                />
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginButton}>
                <Image
                    style={{ width: 50, height: 50 }}
                    source={require("../../assets/icons/icon-notification.png")}
                />
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginButton}>
                <Image
                    style={{ width: 40, height: 40 }}
                    source={require("../../assets/icons/icon-menu.png")}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    loginButton: {
        backgroundColor: "#D9D9D9",
        alignItems: 'center',
        justifyContent: 'center',
        width: "20%",
        height: 60
    },
    buttonText: {
        fontSize: 16,
        color: 'black',
    },
});


export default BottomBarComponent;