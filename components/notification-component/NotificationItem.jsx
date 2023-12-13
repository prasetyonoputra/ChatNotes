import React from "react";
import { Image, Text, View } from "react-native";

function NotificationItem() {
    return (
        <View style={{marginBottom: 10, backgroundColor: "#D9D9D9", minHeight: 100, alignItems: "center", width: "100%", borderRadius: 20, alignSelf: "center", padding: 10, flexDirection: "row", justifyContent: "space-between" }}>
            <View>
                <View style={{ paddingLeft: 10, marginBottom: 5 }}>
                    <Text style={{ color: "#212121", fontSize: 25, fontWeight: "bold", fontFamily: "Anek Bangla" }}>Title</Text>
                </View>
                <View style={{ backgroundColor: "#CEC9C9", width: 270, minHeight: 80, borderRadius: 14, padding: 10 }}>
                    <Text style={{ color: "#212121", fontSize: 15, fontFamily: "Anek Bangla" }}>Description</Text>
                </View>
            </View>
            <View>
                <Image
                    style={{ width: 80, height: 80 }}
                    source={require("../../assets/icons/icon-profile-temp.png")} />
            </View>
        </View>
    )
}

export default NotificationItem;