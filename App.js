import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { ContactProvider } from './src/utils/ContactContext';
import ContactListScreen from './src/screens/ContactList/ContactListScreen';
import AddContactScreen from './src/screens/AddContact/AddContactScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <ContactProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Contacts" component={ContactListScreen} />
          <Stack.Screen name="AddContact" component={AddContactScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ContactProvider>
  );
}