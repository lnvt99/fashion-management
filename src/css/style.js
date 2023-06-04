import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    space: {
      marginTop: 10,
      marginBottom: 10,
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    items: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    itemsSearch: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    }
});

export default styles;