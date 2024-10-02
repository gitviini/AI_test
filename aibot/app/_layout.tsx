import COLORS from '@/configs';

import { Stack } from 'expo-router';

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
      <Stack.Screen name="bot" options={{
        title:'AI Bot'
      }}/>
    </Stack>
  );
}