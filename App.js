import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ArtistMapScreen from "./src/screens/ArtistMapScreen";
import LoginScreen from "./src/screens/LoginScreen";
import NowPlayingScreen from "./src/screens/NowPlayingScreen";
import PaymentInformationScreen from "./src/screens/settings/PaymentInformationScreen";
import PlaylistScreen from "./src/screens/PlaylistScreen";
import PodcastsScreen from "./src/screens/PodcastsScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import AccountScreen from "./src/screens/AccountScreen";
import {AsyncStorage} from "react-native";


const init = async () => {
    try {
        let user = await AsyncStorage.getItem('@user')
        props.navigation.navigate('Account', {user: user, navigation: props.navigation})
        return null
    } catch (e) {
        //   an error occurred, force login
    }
}

init()

const navigator = createStackNavigator(
    {
        Account: AccountScreen,
        Register: RegisterScreen,
        Login: LoginScreen,
        PaymentInformation: PaymentInformationScreen,
        Playlist: PlaylistScreen,
        Podcasts: PodcastsScreen,
        NowPlaying: NowPlayingScreen,
        ArtistMap: ArtistMapScreen,
        Home: HomeScreen
    },
    {
        initialRouteName: "Login",
        defaultNavigationOptions: {
            title: "SocialBeatz"
        }
    }
);

export default createAppContainer(navigator);
