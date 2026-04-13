/* eslint-disable @typescript-eslint/no-unused-vars */
import { StyleSheet } from 'react-native';
import { cardShadow, Colors, Typography } from '@constant/index';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '@constant/dimentions';

const addtaskStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    inputwraper: {
      marginTop:hp(.5),
      justifyContent: 'space-evenly',
    },
    textinput: {
      justifyContent: 'space-evenly',
      flexDirection: 'column',
      marginTop: hp(1),
      borderColor:Colors.PRIMARY[100]
    },
    datetext: { color: theme?.text, ...Typography.BodyRegular13, top:hp(.2) },
    datecontainer: {
      backgroundColor: Colors.SECONDARY[100],
      flexDirection: 'row',
      height: hp(6.3),
      width: wp(80),
      borderWidth: 1,
      borderColor: Colors.PRIMARY[100],
      borderRadius: hp(1),
      top: hp(1),
    },
    dateimg: {
      tintColor: Colors.SECONDARY[300],
      alignSelf: 'center',
      width: wp(4.9),
      height: hp(2.2),
      paddingHorizontal: hp(2.5),
    },
     buttonview: { marginTop: hp(4), width: wp(85), alignSelf: 'center' },
   
  containertaskdtails: {
    flex: 1,
    backgroundColor: Colors.SECONDARY[100],
    padding: wp(1),
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: wp(4),
    elevation: 3,
    flexDirection:'column'
  },
  title: {
    ...Typography.BodyBold14,
    color: Colors.SECONDARY[200],
    marginBottom: hp(2),
  },
  label: {
    ...Typography.BodyBold14,
    color: Colors.SECONDARY[200],
    marginTop: hp(1),
  },
  value: {
    ...Typography.BodyRegular13,
    color: Colors.SECONDARY[200],
    marginTop: hp(0.3),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(1),
  },
});


export default addtaskStyles;
