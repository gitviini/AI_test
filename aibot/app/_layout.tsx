import { Link } from 'expo-router';
import { Stack } from 'expo-router';

const COLORS = {
  'yellow':'#FDFFAB',
  'orange':'#FFCF81',
  'green':'#D9EDBF',
  'red':'#FFB996',
  'title':'#000000',
}

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.green,
        },
        headerTintColor: COLORS.title,
        headerTitleStyle: {
          fontWeight: 'bold',
          fontFamily: 'monospace',
        },
      }}>
      <Stack.Screen name="index" options={{
        title:'Início'
      }}/>
    </Stack>
  );
}