/* eslint-disable @typescript-eslint/no-unused-vars */
import { StyleSheet } from 'react-native';
import { cardShadow, Colors, Typography } from '@constant/index';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '@constant/dimentions';

const loginstyles = (theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    logostyles: {
      marginTop: hp(2),
      width: wp(50),
      height: wp(50),
      resizeMode: 'contain',
      borderRadius: wp(25),
      ...cardShadow,
      alignSelf: 'center',
    },
    apptitle: {
      color: theme.text,
      ...Typography.H3SemiBold24,
      textAlign: 'center',
    },
    panel: {
      // flex: 1,
      alignSelf: 'center',
      marginTop: hp(3),
    },
    inputWrapper: {
      bottom: hp(1),
      justifyContent: 'space-evenly',
    },
    buttonview: { marginTop: hp(3), width: wp(85), alignSelf: 'center' },
    singuptitle: {
      color: Colors.PRIMARY[100],
      left: hp(1),
      ...Typography.BodyRegular13,
    },
    accounttext: {
     color:theme?.text,
      ...Typography.BodyMedium13,
    },
  });

export default loginstyles;
