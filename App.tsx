import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import RootStack from '@navigation/RootStack';
import FlashMessage from "react-native-flash-message";
import { palette } from "@theme/colors";
import { Provider } from 'react-redux';
import { store } from '@redux/store';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Provider store={store}>
        <RootStack />
        <StatusBar barStyle="lite-content" backgroundColor={palette.PETER_RIVER} />
        <FlashMessage />
      </Provider>
    </SafeAreaView>
  );
}

export default App;
