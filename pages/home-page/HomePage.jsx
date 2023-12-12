import React from "react";
import { Button, ScrollView, ScrollViewComponent, Text, View } from "react-native";
import BottomBarComponent from "../../components/bottom-bar/BottomBarComponent";

function HomePage({ navigation }) {
    return (
        <View style={{height: "100%"}}>
            <View>
                <Text>Search</Text>
            </View>

            <ScrollView>
                <Text>Main</Text>
            </ScrollView>

            <View
                style={{
                    position: "fixed",
                    bottom: 0
                }}
            >
                <BottomBarComponent />
            </View>
        </View>
    );
}

export default HomePage;