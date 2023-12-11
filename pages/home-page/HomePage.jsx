import React from "react";
import { Button, Text, View } from "react-native";

function HomePage({ navigation }) {
    return (
        <View>
            <Text>Home Screen</Text>
            <Button
                title="Go to Another Screen"
                onPress={() => navigation.navigate('Another')}
            />
        </View>
    );
}

export default HomePage;