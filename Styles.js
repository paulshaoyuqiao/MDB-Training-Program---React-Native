import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    centeringBox: {
      alignItems: 'center', 
      justifyContent: 'center', 
      margin: 10
    },
    introLogo: {
      height: '25%', 
      width: '100%'
    },
    gameContainer: {
      flex: 1, 
      flexDirection: 'column',
      alignItems: 'center'
    },
    image: {
      flex: 1,
      width: '100%',
      resizeMode: 'cover',
      alignItems: 'flex-end'
    },
    scoreBadge: {
      backgroundColor: '#834aff',
      position: 'absolute',
      right: 5,
      top: 5,
    },
    timer: {
      backgroundColor: '#320ffa',
      left: 5,
      top: 5
    }
});

export { styles }