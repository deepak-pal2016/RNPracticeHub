import { StyleSheet } from 'react-native';
import { cardShadow, Colors, Typography } from '@constant/index';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '@constant/dimentions';

const styles =(theme:any) => StyleSheet.create({
  container: {
    flex: 1,
  },
  notificatioview:{
    backgroundColor:theme?.background,
    paddingHorizontal:wp(70),
    paddingVertical:hp(6),
    justifyContent:'space-evenly',
    alignItems:'center',
    flexDirection:'row',
  },
   notificationView: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderBottomWidth: 0.5,
    borderColor: "#E5E7EB",
  },

  iconContainer: {
    width: 45,
    height: 45,
    borderRadius: 22,
    backgroundColor: "#F3F4F6",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  textContainer: {
    flex: 1,
  },

  name: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 2,
  },

  message: {
    fontSize: 13,
    color: "#6B7280",
  },

  rightSection: {
    alignItems: "flex-end",
  },

  time: {
    fontSize: 12,
    color: "#9CA3AF",
    marginBottom: 6,
  },
})

export  default styles