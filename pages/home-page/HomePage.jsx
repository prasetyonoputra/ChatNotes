import React from "react";
import { Button, ScrollView, ScrollViewComponent, Text, View } from "react-native";

function HomePage({ navigation }) {
    return (
        <View>
            <View>
                <Text>Search</Text>
            </View>

            <ScrollView>
                <Text>Main</Text>
            </ScrollView>

            <View>
                <Text>Bottom Bar</Text>
            </View>
        </View>
    );
}

export default HomePage;