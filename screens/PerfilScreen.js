import {View, Text,Button, StyleSheet} from 'react-native';
import { createNavigationStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';

const Stack = createNavigationStackNavigator();
const Tab = createBottomTabNavigator();


export default function PerfilScreen({navigation}) {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Pantalla Perfil</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
         backgroundColor: 'e0f0ff',
    },
    titulo: {
        fontSize: 24,
        marginTop: 20
    }
})