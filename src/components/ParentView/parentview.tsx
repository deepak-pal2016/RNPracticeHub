import React, { FC, ReactNode, memo } from 'react';
import { ImageBackground, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './parentstyle';
import { Colors, Images } from '@constant/index';
import { SafeAreaView } from 'react-native-safe-area-context'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '@constant/dimentions';

type ParentViewProps = {
  children: ReactNode;
  totalheight?: ViewStyle | ViewStyle[];
  backimg: string;
};

const ParentviewComponent: FC<ParentViewProps> = ({ children, totalheight, backimg }) => {
  const backgroundSource =
    backimg === 'wave' ? Images.wavescreen : Images.backimage;
  const tabBarHeight = useBottomTabBarHeight();
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={[Colors.PRIMARY[100], Colors.PRIMARY[200], Colors.PRIMARY[300]]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0.6, y: 1.2 }}
        style={styles.backcontainer}
      >
        <ImageBackground
          source={backgroundSource}
          style={[
            styles.backimagestyle,
            totalheight,
            { paddingBottom: tabBarHeight + hp(2) } 
          ]}
          imageStyle={{ borderRadius: 0 }}
          resizeMode="cover"
        >
          {children}
        </ImageBackground>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default memo(ParentviewComponent);
