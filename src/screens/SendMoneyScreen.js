import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  StatusBar,
} from 'react-native';

import Image from '../components/Image';
import colors from '../config/colors';

const SendMoneyScreen = () => {
  return (
    <View style={styles.container}>
      <View
        style={[
          {
            flex: 1 / 6,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: 40,
          },
        ]}
      >
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          <Image
            style={[
              styles.sendMoney2,
              {
                width: 30,
                height: 30,
                borderRadius: 15,
                marginRight: 10,
              },
            ]}
            uri={
              'https://firebasestorage.googleapis.com/v0/b/task-force-93e06.appspot.com/o/a-view.png?alt=media&token=57398f18-7853-4861-89fc-d1a617b46911'
            }
          />
          <View>
            <Text style={{ color: colors.dark }}>Ann Nelson</Text>
            <Text style={{ color: colors.grey }}>nelson.ann@gmail.com</Text>
          </View>
        </View>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={() => {}}
        value={null}
        keyboardType='numeric'
        placeholder='$150.0 |'
        placeholderTextColor={colors.primary}
      />
      <View style={{ flex: 1, margin: 20 }}>
        <View
          style={{
            flex: 1 / 6,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}
        >
          <ButtonView number='1' />
          <ButtonView number='2' />
          <ButtonView number='3' />
        </View>
        <View style={{ height: 20 }} />
        <View
          style={{
            flex: 1 / 6,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}
        >
          <ButtonView number='4' />
          <ButtonView number='5' />
          <ButtonView number='6' />
        </View>
        <View style={{ height: 20 }} />
        <View
          style={{
            flex: 1 / 6,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}
        >
          <ButtonView number='7' />
          <ButtonView number='8' />
          <ButtonView number='9' />
        </View>
        <View style={{ height: 20 }} />
        <View
          style={{
            flex: 1 / 6,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}
        >
          <ButtonView number='0' />
          <ButtonView number='.' />
          <ButtonView number='<-' />
        </View>
      </View>
      <View style={[styles.button, styles.marginVertical]}>
        <TouchableWithoutFeedback
          onPress={() =>
            navigation.navigate('ProfileScreen', { name: 'ProfileScreen' })
          }
        >
          <View style={{ padding: 10 }}>
            <Text style={{ color: colors.white }}>Send</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const ButtonView = ({ number }) => {
  return (
    <View
      style={{
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: colors.white,
      }}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 24 }}>{number}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight ? StatusBar.currentHeight : 32,
  },
  input: {
    height: 60,
    margin: 50,
    borderWidth: 3,
    borderColor: colors.primary,
    borderRadius: 15,
    padding: 10,
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: colors.primary,
    flex: 1 / 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 40,
  },
  marginVertical: {
    marginVertical: 20,
  },
});

export default SendMoneyScreen;
