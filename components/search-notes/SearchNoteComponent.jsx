import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

function SearchNoteComponent() {
    const [searchNote, setSearchNote] = useState(null);

    return (
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: "#D9D9D9" }}>
            <TextInput
                placeholder="Search Note..."
                onChangeText={(e) => setSearchNote(e)}
                placeholderTextColor="#665656"
                style={styles.input}
            />

            <TouchableOpacity style={styles.loginButton}>
                <Image
                    style={{ width: 40, height: 40 }}
                    source={require("../../assets/icons/icon-search.png")}
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
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        marginTop: 10,
        marginLeft: 10,
        padding: 5,
        borderRadius: 8,
        fontSize: 18,
        color: "black",
        width: "77%"
    },
});


export default SearchNoteComponent;