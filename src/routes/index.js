import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../pages/Home/index';
import CreateForm from '../pages/CreateForm/index';
import ViewForm from '../pages/ViewForm/index';
import AnswerForm from '../pages/AnswerForm/index';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CreateForm" component={CreateForm} />
      <Stack.Screen name="ViewForm" component={ViewForm} />
      <Stack.Screen name="AnswerForm" component={AnswerForm} />
    </Stack.Navigator>
  );
};

export default Routes;
