import { StyleSheet, Text, View, TextInput, ScrollView, Image } from 'react-native';

export default function FormularioScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={require('../assets/favicon.png')} style={styles.image} />

        <Text style={styles.text}>Luis Amaranto</Text>
        <Text style={styles.text}>Jugador del Cruz Azul</Text>

        <View style={styles.container}>
          <Text style={styles.text}>Correo</Text>
          <TextInput style={styles.input} placeholder="Escribe tu correo" />

          <Text style={styles.text}>Telefono</Text>
          <TextInput style={styles.input} placeholder="Escribe tu telefono" />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 100,
    height: 100,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    width: 250,
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    marginBottom: 15,
  },
});