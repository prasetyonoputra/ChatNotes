import React, { } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

function BottomBarComponent({ setOpenSidebar, openSidebar, setMainContent }) {
    return (
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <TouchableOpacity style={styles.loginButton} onPress={(e) => setMainContent("notification")}>
                <Image
                    style={{ width: 50, height: 50 }}
                    source={require("../../assets/icons/icon-notification.png")}
                />
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginButton} onPress={(e) => setMainContent("contact")}>
                <Image
                    style={{ width: 50, height: 50 }}
                    source={require("../../assets/icons/icon-peoples.png")}
                />
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginButton} onPress={(e) => setMainContent("home")}>
                <Image
                    style={{ width: 50, height: 50 }}
                    source={require("../../assets/icons/icon-home.png")}
                />
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginButton} onPress={(e) => setMainContent("message")}>
                <Image
                    style={{ width: 50, height: 50 }}
                    source={require("../../assets/icons/icon-notification.png")}
                />
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginButton} onPress={(e) => setOpenSidebar(!openSidebar)}>
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