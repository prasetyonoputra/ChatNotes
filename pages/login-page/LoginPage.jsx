import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleInputChange = (text) => {
        setTextInputValue(text);
    };


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#1E1E1E" }}>
            <View style={{ padding: 20, width: '80%', backgroundColor: "#14FFEC", borderRadius:20 }}>
                <Text style={{ textAlign: "center", fontSize: 45, fontFamily:"Anek Bangla" }}>CHAT NOTES</Text>
                <TextInput
                    keyboardType="email-address"
                    placeholder="Email"
                    onChangeText={(e) => setEmail(e)}
                    style={{
                        height: 40,
                        borderColor: 'gray',
                        borderWidth: 1,
                        marginBottom: 10,
                        padding: 5,
                        borderRadius: 8,
                        fontSize: 18
                    }}
                />
                <TextInput
                    secureTextEntry={true}
                    placeholder="Password"
                    onChangeText={(e) => setPassword(e)}
                    style={{
                        height: 40,
                        borderColor: 'gray',
                        borderWidth: 1,
                        marginBottom: 10,
                        padding: 5,
                        borderRadius: 8,
                        fontSize: 18
                    }}
                />
                <Button
                    title="Login"
                    style={{
                        borderRadius: 7,
                        backgroundColor: "#212121"
                    }}
                />
            </View>
        </View>
    );
}

export default LoginPage;