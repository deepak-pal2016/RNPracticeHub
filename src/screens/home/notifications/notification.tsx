/* eslint-disable @typescript-eslint/no-unused-vars */
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { FC, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Colors, Icon } from '@constant/index';
import { HomeStackProps } from 'src/@types';
import { ThemeContext } from '../../../context/themeContext';
import { DarkTheme, Header, LightTheme, TextView } from '@components/index';
import notificationstyles from '@styles/notificatonStyles';

type NotificationcreenNavigationType = NativeStackNavigationProp<
  HomeStackProps,
  'Notification'
>;

const userslist = [
  {
    id: '1',
    message: 'Rahul assign you a task',
    status: 'Finish report',
    date: '2 march',
  },
  {
    id: '2',
    message: 'Meeting at 3 today',
    status: 'pending',
    date: '4 march',
  },
  {
    id: '3',
    message: 'Day reminder the check notficaiont',
    status: 'Exceute',
    date: '2 march',
  },
];

const Notification: FC = () => {
  const { theme } = useContext(ThemeContext);
  const currentTheme = theme === 'light' ? LightTheme : DarkTheme;
  const styles = notificationstyles(currentTheme);

  const renderItem = ({ item }: any) => {
    return (
     <TouchableOpacity style={styles.notificationView}>
  
  {/* Icon */}
  <View style={styles.iconContainer}>
    <Icon
      family="FontAwesome"
      name="bell"
      size={26}
      color={Colors.PRIMARY[600]}
    />
  </View>

  {/* Message Section */}
  <View style={styles.textContainer}>
    <TextView style={styles.name}>{item?.message}</TextView>
    <TextView style={styles.message}>{item?.status}</TextView>
  </View>

  {/* Right Section */}
  <View style={styles.rightSection}>
    <TextView style={styles.time}>{item?.date}</TextView>
    <Icon
      family="Ionicons"
      name="chevron-forward"
      size={18}
      color="#9CA3AF"
    />
  </View>

</TouchableOpacity>
    );
  };

  return (
    <View style={[styles.container,{ backgroundColor:
                theme === 'dark' ? currentTheme?.background : Colors.PRIMARY[800],}]}>
      <Header  showicons={true} title='Notification' showheader={true} />
      <FlatList
        data={userslist}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Notification;
