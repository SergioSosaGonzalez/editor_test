/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import VideoPlayBack from './videoplayback.mp4';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {
  VESDK,
  Configuration,
  TintMode,
  SerializationExportType,
} from 'react-native-videoeditorsdk';

VESDK.unlockWithLicense(require('./vesdk_android_license.json'));
let configuration: Configuration = {
  sticker: {
    categories: [
      {
        identifier: ' demo_sticker_category',
        name: 'Logos',
        thumbnailURI: require('./react.png'),
        items: [
          {
            identifier: 'demo_sticker_react',
            name: 'React',
            stickerURI: require('./react.png'),
          },
          {
            identifier: 'demo_sticker_imlgy',
            name: 'img.ly',
            stickerURI: require('./node.jpg'),
            tintMode: TintMode.SOLID,
          },
        ],
      },
    ],
  },
  export: {
    serialization: {
      enabled: true,
      exportType: SerializationExportType.OBJECT,
    },
  },
};
let serialization = null;

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={{flex: 1}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}>
          <Button
            title="EDITAR VIDEO"
            onPress={() => {
              VESDK.openEditor(
                VideoPlayBack,
                configuration,
                serialization,
              ).then((result) => {
                if (result != null) {
                  serialization = result.serialization;
                }
                console.log(result);
              });
            }}
          />
        </View>
      </View>
    </>
  );
};

export default App;
