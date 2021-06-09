import React from 'react';
import {AsyncStorage} from 'react-native';

import axios from 'axios';

const config = {
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
}

/**
 *
 * @param email
 * @param password
 * @param navigation
 * @returns {Promise<void>}
 */
async function loginAction(email, password, navigation) {
    let credentials = {email: email, password: password};
    return await axios.post('http://jsymfony.ngrok.io/api/v1/user/login', credentials, config).then(result => {
        try {
            AsyncStorage.setItem('@user', JSON.stringify(result.data), () => {
                navigation.navigate('Account')
            })
        } catch (e) {
            // read error
        }
    });
}

async function logoutAction(navigation){
    try {
        await AsyncStorage.removeItem('@user', () => {
            console.log('deleted auth token')
        })
        navigation.navigate('Login')
    } catch (e) {
        console.log(e)
        // read error
    }
}

async function register() {
}

async function resetPassword() {
}

async function updateSettings() {
}

async function getPlaylistsAction(){

}

export default {
    loginAction: loginAction,
    logoutAction: logoutAction
}
