import React, {useState} from "react";
import UserAccountService from "../api/UserAccountService";
import {Text, StyleSheet, View, Button, TextInput, AsyncStorage} from "react-native";

const LoginScreen = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View>
            <Text style={styles.text}>SocialBeatz Login</Text>

            <TextInput
                style={styles.input}
                title="Email"
                placeholder="Email"
                autoCapitalize="none"
                autoCorrect={false}
                value={email}
                onChangeText={(newValue) => setEmail(newValue)}
            />

            <Text style={styles.text}>{email}</Text>

            <TextInput
                style={styles.input}
                title="Password"
                placeholder="Password"
                autoCapitalize="none"
                autoCorrect={false}
                value={password}
                onChangeText={(newValue) => setPassword(newValue)}
            />

            <Button style={styles.button} title="Login"
                    onPress={() => UserAccountService.loginAction(email, password, props.navigation)}/>

        </View>
    )
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        color: 'black'
    },
    button: {
        borderWidth: 1,
        borderStyle: 'solid',
        margin: 3,
        backgroundColor: '#0e0e0e'
    }
});

export default LoginScreen;
