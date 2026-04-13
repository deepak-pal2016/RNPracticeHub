/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Image,
  FlatList,
} from 'react-native';
import React, { FC, useContext, useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeStackProps } from 'src/@types';
import taskliststyles from '@styles/taskStyles';
import { ThemeContext } from '../../../context/themeContext';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '@constant/dimentions';
import { DarkTheme, Header, LightTheme, TextView } from '@components/index';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Colors from '@constant/colors';
import { cardShadow, Icon, Images, Typography } from '@constant/index';

type TasklistscreenNavigationType = NativeStackNavigationProp<
  HomeStackProps,
  'Tasklist'
>;

const Tasklist: FC = () => {
  const insets = useSafeAreaInsets();
  const { theme } = useContext(ThemeContext);
  const currentTheme = theme === 'light' ? LightTheme : DarkTheme;
  const styles = taskliststyles(currentTheme);
  const [taskprority, setTaskPriority] = useState<any>([
    { label: 'All', value: 'All' },
    { label: 'Work', value: 'work' },
    { label: 'Personal', value: 'personal' },
    { label: 'Gym', value: 'gym' },
    { label: 'Study', value: 'study' },
  ]);

  const [recenttaskArr, setRecentTaskArr] = useState<any>([
    {
      nametask: 'Finish report',
      taskdate: 'May 2025',
      color: Colors.PRIMARY[100],
      userimg: Images.ic_check,
    },
    {
      nametask: 'Gym Workout',
      taskdate: 'May 2021',
      color: Colors.PRIMARY[400],
      userimg: Images.ic_check,
    },
    {
      nametask: 'Buy Groceries',
      taskdate: 'March 2021',
      color: Colors.PRIMARY[600],
      userimg: Images.ic_check,
    },
    {
      nametask: 'Complete Project',
      taskdate: 'March 2026',
      color: Colors.PRIMARY[300],
      userimg: Images.ic_check,
    },
    {
      nametask: 'Play Cricket',
      taskdate: 'March 2026',
      color: Colors.PRIMARY[500],
      userimg: Images.ic_check,
    },
    {
      nametask: 'Learning New',
      taskdate: 'March 2023',
      color: Colors.PRIMARY[200],
      userimg: Images.ic_check,
    },
    {
      nametask: 'Complete Project',
      taskdate: 'March 2026',
      color: Colors.PRIMARY[700],
      userimg: Images.ic_check,
    },
    {
      nametask: 'Learn Python',
      taskdate: 'March 2026',
      color: Colors.PRIMARY[400],
      userimg: Images.ic_check,
    },
    {
      nametask: 'Go To Market',
      taskdate: 'March 2026',
      color: Colors.PRIMARY[800],
      userimg: Images.ic_check,
    },
  ]);

  const searchtask = (keyword: any) => {
    if (!keyword) {
      setRecentTaskArr(taskprority);
      return;
    }

    const filterdata = recenttaskArr?.filter((item: any) =>
      item?.nametask?.toLowerCase().includes(keyword.toLowerCase()),
    );
    console.log(filterdata,'filterdata')
    if (filterdata) {
      setRecentTaskArr(filterdata);
    }else{
      setRecentTaskArr(recenttaskArr)
    }
  };

  const renderItem = ({ item, index }: { item: any; index: number }) => {
    return (
      <View style={styles.taskcontentview}>
        {/* Left Icon */}
        <View
          style={{
            width: wp(8),
            height: wp(8),
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            source={Images.ic_check}
            style={{
              width: wp(9),
              height: wp(9),
              resizeMode: 'contain',
              tintColor: item?.color,
            }}
          />
        </View>

        {/* Task Info */}
        <View
          style={{
            flex: 1,
            marginLeft: wp(4),
            top: hp(0.6),
          }}
        >
          <TextView
            style={{
              color: Colors.SECONDARY[200],
              ...Typography.H6Medium16,
            }}
          >
            {item?.nametask}
          </TextView>

          <TextView
            style={{
              color: Colors.FLOATINGINPUT[100],
              ...Typography.BodyRegular13,
              marginTop: hp(0.4),
            }}
          >
            {item?.taskdate}
          </TextView>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            paddingHorizontal: hp(1),
          }}
        >
          <Icon
            family="Feather"
            name="more-horizontal"
            size={25}
            color={Colors.SECONDARY[200]}
          />
          {/* Right Avatar */}
          <Image
            source={Images.ic_uncheck}
            style={{
              marginLeft: hp(3),
              width: wp(9),
              height: wp(9),
              // borderRadius: wp(5),
              resizeMode: 'contain',
              tintColor: item?.color,
            }}
          />
        </View>
      </View>
    );
  };

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
          backgroundColor:
            theme === 'dark' ? currentTheme?.background : Colors.PRIMARY[800],
        },
      ]}
    >
      <Header showheader={true} showicons={true} title="Task List" />
      <TouchableWithoutFeedback>
        <View style={{ marginTop: hp(2), flex: 1 }}>
          <View style={styles.searchcontainer}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}
            >
              <Icon
                family="Ionicons"
                name="search"
                color={Colors?.FLOATINGINPUT[400]}
                size={22}
              />
              <TextInput
                placeholder="Search tasks"
                placeholderTextColor={Colors?.FLOATINGINPUT[400]}
                style={styles.searchinput}
                onChangeText={(text: any) => searchtask(text)}
              />
            </View>
          </View>
          <View
            style={{
              margin: hp(1),
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'flex-start',
            }}
          >
            {taskprority?.map((item: any, index: any) => {
              return (
                <View
                  key={index}
                  style={[
                    styles.prioritymenu,
                    {
                      backgroundColor:
                        index === 0 ? Colors.PRIMARY[100] : '#dee3eb',
                    },
                  ]}
                >
                  <TextView
                    style={{
                      color:
                        index === 0
                          ? Colors.SECONDARY[100]
                          : Colors.SECONDARY[200],
                      ...Typography.BodyRegular13,
                    }}
                  >
                    {' '}
                    {item?.label}
                  </TextView>
                </View>
              );
            })}
          </View>
          <View style={{ marginTop: hp(1) }}>
            <FlatList
              data={recenttaskArr}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderItem}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                paddingBottom: hp(5),
              }}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Tasklist;
