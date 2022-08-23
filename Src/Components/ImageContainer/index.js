import React,{useRef} from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import {hp, wp} from '../../Utilities/ResponsiveLayout';
import FastImage from 'react-native-fast-image';
import Lightbox from 'react-native-lightbox';
const Index = props => {
  const lightBoxRef=useRef(null)
  const {width, height, url} = props;
  return (
    <View style={{width: wp(200), height: wp(200)}}>
      <Lightbox
      ref={lightBoxRef}
        swipeToDismiss={true}
        pageTransitionConfig={{
              from: { transform: "scale(0.75)", opacity: 0 },
              enter: { transform: "scale(3)", opacity: 1 },
              leave: { transform: "scale(0.75)", opacity: 0 },
              config: { mass: 1, tension: 320, friction: 32 }
            }}
        springConfig={{
          // friction: 7,//Controls "bounciness"/overshoot. Default 7.
          // tension: 10, //Controls speed. Default 40.
          speed: 12, //Controls speed of the animation.Default 12.
          bounciness: 0.1, //Controls bounciness. Default 8.
        }}>
        <FastImage
          style={{width: wp(width), height: wp(height)}}
          source={{
            uri: 'https://cdn2.thecatapi.com/images/cd0.jpg',
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
      </Lightbox>
    </View>
  );
};
export default Index;
