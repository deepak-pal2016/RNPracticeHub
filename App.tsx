/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from '@redux/store/store'; //this store redux toolkit store
import Route from './src/routes/index';
import { CommonAlertProvider } from '@components/CommonAlertModal/commonAlertModal';
import { CommonLoaderProvider } from '@components/CommonLoader/commonLoader';
import { ThemeProvider } from './src/context/index';
import FlashMessage from 'react-native-flash-message';
import { UserDataContextProvider } from './src/context/index';
import { LogBox } from 'react-native';
import messaging from '@react-native-firebase/messaging';


//import { store } from '@services/rtkquery/store'; rtk querey store
LogBox.ignoreLogs(['InteractionManager has been deprecated']);

const App = () => {
  useEffect(() => {
    const unsubscribe = messaging().onNotificationOpenedApp(remoteMessage => {
      console.log('App opened from background:', remoteMessage);

      // 👉 yaha navigation bhi kar sakte ho
      // example:
      // navigation.navigate('Taskdetails', {
      //   id: remoteMessage?.data?.taskId,
      // });
    });

  

    return unsubscribe;
  }, []);
  return (
    <Provider store={store}>
      <ThemeProvider>
        <UserDataContextProvider>
          <CommonLoaderProvider>
            <CommonAlertProvider>
              <Route />
              <FlashMessage position="bottom" />
            </CommonAlertProvider>
          </CommonLoaderProvider>
        </UserDataContextProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
