import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';

import colors from '../config/colors';
import Image from '../components/Image';

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <View style={styles.topElement}>
          <Image
            style={styles.topImage}
            uri={
              'https://firebasestorage.googleapis.com/v0/b/task-force-93e06.appspot.com/o/Screen%20Shot%202021-06-05%20at%2010.50.10.png?alt=media&token=f7016e07-4bd2-4e5b-b6ba-ba7b94c26d5a'
            }
          />
          <Image
            style={styles.topImage}
            uri={
              'https://firebasestorage.googleapis.com/v0/b/task-force-93e06.appspot.com/o/avatar-xyz.png?alt=media&token=be9d9350-10e5-4f17-ab27-cfd028364c32'
            }
          />
        </View>
        <View style={styles.textView}>
          <Text style={styles.whiteColor}>Hello Vadim!</Text>
        </View>
        <View style={styles.textView}>
          <Text
            style={[styles.whiteColor, { fontSize: 24, fontWeight: 'bold' }]}
          >
            $272.30
          </Text>
        </View>
        <View style={[styles.textView, { marginTop: -10 }]}>
          <Text style={styles.whiteColor}>Your Balance</Text>
        </View>
      </View>
      <View style={[styles.flex4, styles.flex4Direction]}>
        <TouchableWithoutFeedback
          onPress={() =>
            navigation.navigate('SendMoney', { name: 'Send Money' })
          }
        >
          <View style={[styles.flex4View1]}>
            <Image
              style={styles.sendMoney}
              uri={
                'https://firebasestorage.googleapis.com/v0/b/task-force-93e06.appspot.com/o/send-money.png?alt=media&token=759f4ac2-4f10-4755-9cac-dacbd7fb4ebe'
              }
            />
            <Text style={styles.whiteColor}>Send</Text>
            <Text style={styles.whiteColor}>Money</Text>
          </View>
        </TouchableWithoutFeedback>
        <View style={[styles.flex4View2, styles.boxWithShadow]}>
          <Image
            style={styles.sendMoney}
            uri={
              'https://firebasestorage.googleapis.com/v0/b/task-force-93e06.appspot.com/o/request-payment.png?alt=media&token=d73a1603-d72a-4a29-aa8a-423600eb9549'
            }
          />
          <Text style={styles.primaryColor}>Request</Text>
          <Text style={styles.primaryColor}>Payment</Text>
        </View>
        <View>
          <Image
            style={styles.sendMoney2}
            uri={
              'https://firebasestorage.googleapis.com/v0/b/task-force-93e06.appspot.com/o/three-dots.png?alt=media&token=3058defb-f261-4b14-80a2-fab41ee8b3dc'
            }
          />
        </View>
      </View>
      <View style={[styles.flex4]}>
        <View style={styles.activityView}>
          <Text style={styles.darkColor}>Activity</Text>
          <Text style={styles.greyColor}>View All</Text>
        </View>
        <View style={{ flex: 1 }}>
          <View
            style={[
              {
                flex: 1 / 3,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginHorizontal: 40,
                marginVertical: 20,
              },
              styles.boxWithShadow,
            ]}
          >
            <View
              style={{
                flex: 1 / 2,
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}
            >
              <Image
                style={[
                  styles.sendMoney2,
                  { width: 30, height: 30, borderRadius: 15, marginRight: 10 },
                ]}
                uri={
                  'https://firebasestorage.googleapis.com/v0/b/task-force-93e06.appspot.com/o/m-view.png?alt=media&token=0f132958-d37b-4e69-873c-77286c7d8a1b'
                }
              />
              <View>
                <Text style={{ color: colors.dark }}>Mike Rine</Text>
                <Text style={{ color: colors.grey }}>2 hours ago</Text>
              </View>
            </View>
            <View>
              <Text style={{ color: colors.success }}>+$250</Text>
            </View>
          </View>
          <View
            style={[
              {
                flex: 1 / 3,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginHorizontal: 40,
                marginVertical: 20,
              },
              styles.boxWithShadow,
            ]}
          >
            <View
              style={{
                flex: 1 / 2,
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}
            >
              <Image
                style={[
                  styles.sendMoney2,
                  { width: 30, height: 30, borderRadius: 15, marginRight: 10 },
                ]}
                uri={
                  'https://firebasestorage.googleapis.com/v0/b/task-force-93e06.appspot.com/o/google-drive.png?alt=media&token=2690a84f-d892-4695-a74e-4bb15a27979d'
                }
              />
              <View>
                <Text style={{ color: colors.dark }}>Google Drive</Text>
                <Text style={{ color: colors.grey }}>Yesterday</Text>
              </View>
            </View>
            <View>
              <Text style={{ color: colors.danger }}>-$250</Text>
            </View>
          </View>
          <View
            style={[
              {
                flex: 1 / 3,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginHorizontal: 40,
                marginVertical: 20,
              },
              styles.boxWithShadow,
            ]}
          >
            <View
              style={{
                flex: 1 / 2,
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}
            >
              <Image
                style={[
                  styles.sendMoney2,
                  { width: 30, height: 30, borderRadius: 15, marginRight: 10 },
                ]}
                uri={
                  'https://firebasestorage.googleapis.com/v0/b/task-force-93e06.appspot.com/o/c-view.png?alt=media&token=1150010c-6e05-4c14-b4bd-e8e5856f327c'
                }
              />
              <View>
                <Text style={{ color: colors.dark }}>Casey Smith</Text>
                <Text style={{ color: colors.grey }}>1 week ago</Text>
              </View>
            </View>
            <View>
              <Text style={{ color: colors.success }}>+$531</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{ flex: 1 / 20 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  topView: {
    backgroundColor: colors.primary,
    flex: 1 / 3,
    borderBottomRightRadius: 25,
  },
  topElement: {
    flex: 1 / 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  topImage: {
    width: 40,
    height: 40,
    borderRadius: 10,
  },
  whiteColor: {
    color: colors.white,
  },
  primaryColor: {
    color: colors.primary,
  },
  darkColor: {
    color: colors.dark,
  },
  greyColor: {
    color: colors.grey,
  },
  ml20: {
    marginLeft: 20,
  },
  textView: {
    flex: 1 / 4,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: 20,
  },
  flex4: {
    flex: 1 / 3,
  },
  flex4Direction: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  flex4View1: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 15,
    backgroundColor: colors.primary,
    padding: 30,
  },
  flex4View2: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 15,
    backgroundColor: colors.white,
    padding: 30,
  },
  sendMoney: {
    width: 15,
    height: 15,
    marginBottom: 15,
  },
  sendMoney2: {
    width: 15,
    padding: 15,
    borderRadius: 15,
  },
  boxWithShadow: {
    shadowColor: colors.white,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 15,
    elevation: 5,
  },
  activityView: {
    flex: 1 / 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 40,
  },
});

export default ProfileScreen;
