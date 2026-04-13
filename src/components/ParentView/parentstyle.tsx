import {StyleSheet} from 'react-native';
import {cardShadow, Colors, Typography} from '@constant/index';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '@constant/dimentions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  backcontainer: {
    flex: 1,
  },
  backimagestyle: {
    width: wp(100),
    // height: hp(97.5),
    alignSelf: 'center',
    padding: hp(4),
    // borderRadius: 30,
    overflow: 'hidden',
    ...cardShadow,
  },
});

export default styles;
