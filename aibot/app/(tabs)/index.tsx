// Importando link para navegação entre rotas
import { Link } from 'expo-router';
// Importando elementos para visualização e personalização da página
import { View, Text, StyleSheet } from 'react-native';

// Exporta a "página" por padrão
export default function HomeScreen() {
  // Retornando conteúdo com estilo aplicado
  return (
    <View style={styles.container}>
      <Text>Início</Text>
      <Link href={{
        pathname: '/details/[id]',
        params: { id: 'bacon' },
      }} style={styles.link}>View details</Link>
    </View>
  );
}

// CSS local
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  link :{
    color : 'blue',
    fontStyle : 'italic',
    fontFamily: 'monospace'
}
});