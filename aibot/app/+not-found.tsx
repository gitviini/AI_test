import {Link, Stack} from 'expo-router';

import {View, StyleSheet} from 'react-native';

export default function NotFoundScreen(){
    return (
        <>
            <Stack.Screen options={{
                title : "Essa aba não existe"
            }} />
            <View style={styles.container} >
                <Link href="/" style={styles.link}>Voltar para home</Link>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    link :{
        color : 'blue',
        fontStyle : 'italic',
        fontFamily: 'monospace'
    }
})