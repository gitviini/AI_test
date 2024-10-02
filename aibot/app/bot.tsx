import { View, StyleSheet, Text, TextInput, Pressable, FlatList, Image } from 'react-native'

import { useState, useEffect } from 'react'

import COLORS from '@/configs'

import axios from 'axios';
import { setStatusBarBackgroundColor } from 'expo-status-bar';

const API_URL = 'https://pokeapi.co/api/v2/pokemon/';

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

function Bot() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData('pikachu');
    }, []);

    const fetchData = async (pokemon = "") => {
        try {
            const response = await axios.get(API_URL + pokemon);
            setData(response.data.name);
            set_image(response.data.sprites.front_default)
            console.log(response.data.sprites.front_default)
        } catch (error) {
            console.warn(error)
        }
    };

    const [prompt, set_prompt] = useState("")

    const [image, set_image] = useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png")

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{
                    uri:image
                }}
            />
            <Text style={styles.title}>Making API Requests</Text>
            {/* <FlatList
                data={data}
                keyExtractor={(abilities) => String(abilities['id'])}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text>{item['name']}</Text>
                    </View>
                )}
            /> */}

            <Text>{data}</Text>
            <View style={styles.container_input}>
                <TextInput style={styles.input} placeholder='Digite sua pergunta' onChangeText={text_ => set_prompt(text_)}></TextInput>
                <Pressable style={styles.button} onPress={() => fetchData(prompt)}>
                    <Text>Enviar</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 20,
        padding: 20,
    },
    container_input: {
        width: '100%',
        height: 'auto',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        padding: 0,
    },
    input: {
        width: '65%',
        borderWidth: 1,
        borderColor: '#234',
        padding: 10,
        borderRadius: 10,
        fontSize: 18,
    },
    button: {
        backgroundColor: COLORS.red,
        borderWidth: 2,
        borderColor: COLORS.red,
        padding: 12,
        borderRadius: 10,
        fontSize: 18,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    item: {
        backgroundColor: '#fff',
        padding: 10,
        marginVertical: 8,
        borderRadius: 8,
    },
    image: {
        flex: 1,
        width: '100%',
        backgroundColor: '#0553',
      },
})

export default Bot