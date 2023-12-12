import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

function ForgotPasswordPage({ navigation }) {
    const [email, setEmail] = useState('');

    return (
        <View style={styles.container}>

            <TouchableOpacity style={styles.backButton}>
                <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>

            <View style={styles.formContainer}>
                <Text style={styles.logoText}>Chat Notes</Text>
                <TextInput
                    keyboardType="email-address"
                    placeholder="Email"
                    onChangeText={(e) => setEmail(e)}
                    placeholderTextColor="#665656"
                    style={styles.input}
                />
                <TouchableOpacity style={styles.loginButton}>
                    <Text style={styles.buttonText}>Reset Password</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#1E1E1E",
    },
    formContainer: {
        padding: 20,
        width: '80%',
        backgroundColor: "#14FFEC",
        borderRadius: 20,
    },
    logoText: {
        textAlign: "center",
        fontSize: 45,
        fontFamily: "Anek Bangla",
        color: "black",
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        padding: 5,
        borderRadius: 8,
        fontSize: 18,
        color: "black",
    },
    loginButton: {
        borderRadius: 7,
        backgroundColor: "#212121",
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: "50%",
        alignSelf: "center",
        marginTop: 10,
    },
    buttonText: {
        fontSize: 16,
        color: 'white',
    },
    bottomLinksContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 30,
    },
    backButton: {
        position: "absolute",
        top: 20,
        left: 20
    },
    linkText: {
        color: "black",
    },
});

export default ForgotPasswordPage;