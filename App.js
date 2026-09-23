import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InicioScreen from './screens/InicioScreen';
import DetalleScreen from './screens/DetalleScreen';
import FormularioScreen from './screens/FormularioScreen';
import PerfilScreen from './screens/PerfilScreen';

const Stack = createNativeStackNavigator();

export default function App() {
return (
  
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Inicio') {
              iconName = 'home';
            } else if (route.name === 'Detalle') {
              iconName = 'search';
            } else if (route.name === 'Perfil') {
              iconName = 'person';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintCOlor: '#007AFF',
          tabBarInactiveColor:'gray'

        })}
      >
        <Tab.Screen name="Inicio" component={InicioScreen} />
        <Tab.Screen name="Detalle" component={DetalleScreen} />
        <Tab.Screen name="Formulario" component={FormularioScreen} />
        <Tab.Screen name="Perfil" compontent={PerfilScreen}/>

  
      </Tab.Navigator>
    </NavigationContainer>
  )
}
