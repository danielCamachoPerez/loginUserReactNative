/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
    StyleSheet,
    Text,
} from 'react-native';
import { Provider } from 'react-redux';
import store, { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import TasksList from './screen/TasksList';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddTask from './screen/AddTask';
import { NavigationContainer } from '@react-navigation/native';


const AppRouter = () => {
    const { Navigator, Screen } = createBottomTabNavigator();
    return (
        <Navigator>
            <Screen name="TasksList" component={TasksList} />
            <Screen name="AddTask" component={AddTask} />
        </Navigator>
    );
};

function App(): React.JSX.Element {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer>
                    <AppRouter />
                </NavigationContainer>
            </PersistGate>
        </Provider>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});

export default App;
