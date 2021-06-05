import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';

import Image from '../components/Image';
import colors from '../config/colors';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image
          style={styles.logoImage}
          uri={
            'https://firebasestorage.googleapis.com/v0/b/task-force-93e06.appspot.com/o/Screen%20Shot%202021-06-05%20at%2010.50.02.png?alt=media&token=9f17605c-0bed-4485-8390-56b1bbf8787b'
          }
        />
      </View>
      <TextInput
        style={styles.input}
        onChangeText={null}
        value={null}
        placeholder='Enter your name or email'
      />
      <TextInput
        style={styles.input}
        onChangeText={null}
        value={null}
        placeholder='Password'
      />
      <View style={[styles.button, styles.marginVertical]}>
        <TouchableWithoutFeedback
          onPress={() =>
            navigation.navigate('ProfileScreen', { name: 'ProfileScreen' })
          }
        >
          <View>
            <Text style={styles.whiteText}>Login</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>

      <View style={styles.textSignup}>
        <Text style={styles.greyColor}>Having trouble logging in?</Text>
        <TouchableWithoutFeedback onPress={() => {}}>
          <View style={styles.marginVertical}>
            <Text style={styles.greyColor}>Signup</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: StatusBar.currentHeight ? StatusBar.currentHeight : 32,
    backgroundColor: colors.white,
  },
  logo: {
    flex: 1 / 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: 200,
    height: 50,
  },
  input: {
    height: 40,
    margin: 12,
  },
  button: {
    backgroundColor: colors.primary,
    flex: 1 / 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 25,
    borderRadius: 10,
  },
  whiteText: {
    color: colors.white,
  },
  textSignup: {
    flex: 1 / 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    paddingVertical: 10,
  },
  greyColor: {
    color: colors.grey,
  },
  marginVertical: {
    marginVertical: 20,
  },
});

export default LoginScreen;
