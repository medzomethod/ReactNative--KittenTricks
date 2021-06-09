import React from "react";
import {Text, StyleSheet, Button, View, AsyncStorage} from "react-native";
import UserAccountService from "../api/UserAccountService";

const AccountScreen = (props) => {
   return (
        <View>
            <Text style={styles.text}>This is the account screen</Text>
        </View>

    )
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    }
});

export default AccountScreen;
