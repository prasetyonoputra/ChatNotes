import React from "react";
import { Button, ScrollView, ScrollViewComponent, Text, View } from "react-native";
import BottomBarComponent from "../../components/bottom-bar/BottomBarComponent";
import SearchNoteComponent from "../../components/search-notes/SearchNoteComponent";

function HomePage({ navigation }) {
    return (
        <View style={{ height: "100%" }}>
            <View
                style={{
                    position: "fixed",
                    top: 0
                }}
            >
                <SearchNoteComponent />
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