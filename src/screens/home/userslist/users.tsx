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
import Icon from 'react-native-vector-icons/Ionicons';
import { HomeStackProps } from 'src/@types';
import { ThemeContext } from '../../../context/themeContext';
import { DarkTheme, Header, LightTheme, TextView } from '@components/index';
import usersStyles from '@styles/usersStyles';
type UsersscreenNavigationType = NativeStackNavigationProp<
  HomeStackProps,
  'Users'
>;

const userslist = [
  {
    id: "1",
    name: "Rahul Sharma",
    message: "Hey, are you available?",
    time: "10:30 AM",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: "2",
    name: "Priya Singh",
    message: "Task completed 👍",
    time: "09:45 AM",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: "3",
    name: "Aman Verma",
    message: "Let's discuss the project",
    time: "Yesterday",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    id: "4",
    name: "Neha Gupta",
    message: "Meeting at 5 PM",
    time: "Yesterday",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

const Users:FC = () => {
  const { theme } = useContext(ThemeContext);
  const currentTheme = theme === 'light' ? LightTheme : DarkTheme;
  const styles = usersStyles(currentTheme);

  const renderItem = ({ item }: any) => {
    return(
    <TouchableOpacity style={styles.card}>
      
      <Image source={{ uri: item.image }} style={styles.avatar} />

      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.message}>{item.message}</Text>
      </View>

      <View style={styles.rightSection}>
        <Text style={styles.time}>{item.time}</Text>
        <Icon name="chatbubble-ellipses-outline" size={20} color="#9CA3AF" />
      </View>

    </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <Header showicons={true} screenname='Chat List'   showheader={false}/>
      <FlatList
        data={userslist}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Users;
