import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react';


export default function App() {
  //Constantes para Contador
  const [count, setCount] = useState(0);
  //Constantes para hacer un arreglo de numeros y pintarlo
  const numeros = [1,2,3,4,5,6,7,8,9,10];
  //Constantes para hacer un text input y mostrar lo que se esta escribiendo
  const [text, setText] = useState('');
  const [pantalla, setPantalla] = useState('inicio');

  return (
    <View style={styles.container}>
      {/* <Text>Inicio de actividades en clase </Text> */}
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Text>Alguna palabra</Text>
      <Text>Count: {count}</Text>
      <Button title='INCREMENTAR' onPress={() => setCount(count + 1)} />
      <Button title='DECREMENTAR' onPress={() => setCount(count - 1)} />
      <Button title='ALERTA' onPress={() => alert('mensaje')} />
      <StatusBar style='auto'  />

       {/* <Text>Imprimir lista de numeros </Text> */}
       {numeros.map((numero) =>(
        <Text key={numero}>
          {numero}
        </Text>
       ))}

       {/* <Text>Hacer un text input con onChance, value, placeholder y mostrar lo que se esta escribiendo se vea en un text </Text> */}
       <TextInput
         placeholder="Escribe algo..."
         value={text}
         onChangeText={setText}
         style={styles.input}
       />
       <Text>{text}</Text>
       <Button title="Ir a otra pantalla" onPress={() => setPantalla('segunda')} />
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});