import {View, Text,Button, StyleSheet} from 'react-native';


export default function DetalleScreen({navigation}) {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Pantalla Detalle</Text>
            <Button
                title='Regresar a Inicio'
                onPress={() => navigation.goBack()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
         backgroundColor: 'white',
    },
    titulo: {
        fontSize: 24,
        marginTop: 20
    }
})