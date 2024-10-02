// Importações
    // Cores
import COLORS from '@/configs'
    // Icone
import AntDesign from '@expo/vector-icons/AntDesign'
    // Componentes padrões
import { View, Text, StyleSheet } from 'react-native'
import { Link, LinkProps } from 'expo-router'

// Componente Title
function Title(props: { text: string }) {
    return (
        <View style={styles.container_title}>
            <AntDesign name="book" size={24} color="black" />
            <Text style={styles.title}>{props.text}</Text>
        </View>
    )
}

export default Title

// Estilo do componente
const styles = StyleSheet.create({
    title: {
        color: COLORS.title,
        fontStyle: 'italic',
        fontFamily: 'monospace',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left',
    },
    container_title: {
        width: '100%',
        height: 'auto',
        flexDirection: 'row',
        gap: 10,
    }
})