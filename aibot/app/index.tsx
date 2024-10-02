// Importando link para navegação entre rotas
import AntDesign from '@expo/vector-icons/AntDesign';
import { Link } from 'expo-router';
import COLORS from '@/configs';
import { Icon } from '@expo/vector-icons/build/createIconSet';
import Title from '@/components/personalized'
// Importando elementos para visualização e personalização da página
import { View, Text, StyleSheet } from 'react-native';

// Exporta a "página" por padrão
export default function HomeScreen() {
  // Retornando conteúdo com estilo aplicado
  return (
    <View style={styles.container}>
      <Title text='Sobre o AI Bot' />
      <Text style={styles.paragraph}>
        Projeto criado para criação de chat bot utilizando react native e expo.
      </Text>
      <View style={styles.container_button_link}>
        <Link onPress={()=>console.log()} href={'/bot'} style={styles.button_link}>Acessar o Bot</Link>
      </View>
    </View>
  );
}

// CSS local
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 20,
    padding: 20,
  },
  link: {
    color: COLORS.link,
    fontStyle: 'italic',
    fontFamily: 'monospace'
  },
  container_button_link:{
    flexDirection: 'row',
    backgroundColor: COLORS.orange,
    borderRadius: 10,
  },
  button_link: {
    color: COLORS.title,
    fontSize: 18,
    fontFamily: 'monospace',
    padding: 10,
  },
  paragraph: {
    color: COLORS.text,
    fontSize: 20,
    textAlign: 'justify',
  }
});