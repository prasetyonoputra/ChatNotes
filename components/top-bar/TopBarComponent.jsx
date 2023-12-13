import React from "react";
import { Image, Text, View } from "react-native";


function TopBarComponent() {
    return (
        <View style={{ backgroundColor: "#D9D9D9", minHeight: 60, alignItems: "center" }}>
            <Text style={{ fontSize: 25, color: "#212121" }}>USERNAME</Text>
            <Text style={{ fontSize: 13, color: "#212121" }}>Status</Text>

            <Image
                style={{ width: 60, height: 60, position: "absolute", right: 0, }}
                source={require("../../assets/icons/icon-profile-temp.png")} />
        </View>
    );
}

export default TopBarComponent;