import { View, StyleSheet, Text } from 'react-native'

import { TextInput } from 'react-native'

let text = ""

function Bot() {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder='Digite sua pergunta' onChangeText={e => text = e}></TextInput>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 20,
        padding: 20,
    },
    input: {
        borderWidth: 2,
        borderColor: '#234',
        padding: 10,
        borderRadius: 10,
        fontSize: 18,
    }
})

export default Bot