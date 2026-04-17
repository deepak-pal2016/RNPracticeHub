/* eslint-disable @typescript-eslint/no-unused-vars */
import { Platform, StyleSheet } from 'react-native';
import { cardShadow, Colors, Typography } from '@constant/index';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '@constant/dimentions';

const chatStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },

    sendBtn: {
      marginLeft: 10,
      backgroundColor: Colors.PRIMARY[100],
      width: 40,
      height: 40,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputbar: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 8,
      borderTopWidth: 0.5,
      borderColor: '#ccc',
      backgroundColor: '#fff',
    },
    inputtext: {
      flex: 1,
      marginHorizontal: wp(2.1),
      backgroundColor: '#f2f2f2',
      borderRadius: hp(2),
      paddingHorizontal: hp(2),
      paddingVertical: Platform.OS === 'ios' ? 10 : hp(1.6),
      color: '#000',
    },
  });

export default chatStyles;
