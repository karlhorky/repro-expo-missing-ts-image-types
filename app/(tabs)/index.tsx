import { Image, StyleSheet, View } from 'react-native';
import logo from '../../assets/images/react-logo.png';

export default function HomeScreen() {
  return (
    <View style={styles.view}>
      <Image source={logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});
