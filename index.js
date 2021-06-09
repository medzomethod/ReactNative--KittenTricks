import { AppRegistry, Platform, SafeAreaView } from 'react-native';
import App from './App';

AppRegistry.registerComponent('socialbeatz', () => App);

if (Platform.OS === 'web') {
  const rootTag = document.getElementById('root') || document.getElementById('main');
  AppRegistry.runApplication('socialbeatz', { rootTag });
}
