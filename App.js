import React from 'react';
import { View, Image } from 'react-native'
import { Container, Text, Button, Icon } from 'native-base'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { styles } from './Styles'
import { GameScreen } from './Game'

const Stack = createStackNavigator();

const HomeScreen = function ({ navigation }) {
  return (
    <Container style={styles.container}>
        <View style={styles.centeringBox}>
          <Button disabled rounded primary large>
            <Text>MDB: Meet the Members</Text>
          </Button>
        </View>
        <View style={{height: '25%', width: '100%'}}>
          <Image 
            source={require('./assets/mdb_logo.png')}
            style={{flex: 1, width: null, height:null, resizeMode: 'contain'}}
          />
        </View>

        <View style={styles.centeringBox}>
          <Button rounded 
            onPress={() => navigation.navigate("Game")}
          >
            <Icon name='send' />
            <Text>Click to Begin</Text>
          </Button>
        </View>
    </Container>
  )
}

const App = function () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Game" component={GameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;