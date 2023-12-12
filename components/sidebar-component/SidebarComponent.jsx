import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

function SidebarComponent({ setOpenSidebar, openSidebar }) {
    const renderSidebarButton = (text) => (
        <TouchableOpacity
            style={styles.sidebarButton}
            onPress={(e) => setOpenSidebar(!openSidebar)}
        >
            <Text style={styles.sidebarButtonText}>{text}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.sidebarContainer}>
            <TouchableOpacity
                style={styles.closeButton}
                onPress={(e) => setOpenSidebar(!openSidebar)}
            >
                <Image
                    style={styles.closeButtonIcon}
                    source={require("../../assets/icons/icon-close.png")}
                />
            </TouchableOpacity>

            <View style={{ flexDirection: "row", justifyContent: "flex-end", marginTop: 10, marginRight: 10 }}>
                <View>
                    <Text style={{ fontSize: 40, color: "#212121" }}>Username</Text>
                    <Text style={{ color: "#212121" }}>Email@email.com</Text>
                </View>
                <Image
                    style={{ width: 80, height: 80 }}
                    source={require("../../assets/icons/icon-profile-temp.png")} />
            </View>

            <View style={styles.sidebarContent}>
                {renderSidebarButton("Notes")}
                {renderSidebarButton("Profile")}
                {renderSidebarButton("Setting")}
                {renderSidebarButton("Logout")}
            </View>

            <View style={{
                backgroundColor: "#C9B2B2",
                padding: 10,
                alignContent: "center",
                alignItems: "center",
                marginLeft: 50,
                marginRight: 50,
                backgroundColor: "#C9B2B2",
                borderColor: "#C9B2B2",
                borderRadius: 10
            }}>
                <Text style={{ fontSize: 40, color: "#212121" }}>NOTES APP</Text>
            </View >
        </View >
    );
}

const styles = {
    sidebarContainer: {
        position: "absolute",
        height: "100%",
        width: "90%",
        right: 0,
        zIndex: 2,
        backgroundColor: "#D9D9D9",
    },
    closeButton: {
        position: "absolute",
        top: 10,
        left: 10,
    },
    closeButtonIcon: {
        width: 35,
        height: 35,
    },
    sidebarContent: {
        alignContent: "center",
        alignItems: "center",
        marginTop: 50,
        height: "70%"
    },
    sidebarButton: {
        borderWidth: 1,
        borderColor: "#C9B2B2",
        width: "90%",
        backgroundColor: "#C9B2B2",
        alignContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginBottom: 10,
    },
    sidebarButtonText: {
        fontFamily: "Anek Bangla",
        fontSize: 40,
        color: "#212121",
    },
};

export default SidebarComponent;
