import React, { useRef, useState } from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import { hp, wp } from "../../Utilities/ResponsiveLayout";
import FastImage from "react-native-fast-image";
import Lightbox from "react-native-lightbox";
import LoadingView from "../Loader";

const Index = (props) => {
  const { url } = props;
  const [isOpen, setOpen] = useState(false);
const [isLoading,setLoading]=useState(false)
  return (
    <View
      style={{ width: wp(200), height: wp(200), borderWidth: isOpen ? 0 : 5 }}
    >
      <Lightbox
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        swipeToDismiss={true}
        pageTransitionConfig={{
          from: { transform: "scale(0.75)", opacity: 0 },
          enter: { transform: "scale(3)", opacity: 1 },
          leave: { transform: "scale(0.75)", opacity: 0 },
          config: { mass: 1, tension: 320, friction: 32 },
        }}
        springConfig={{
          // friction: 7,//Controls "bounciness"/overshoot. Default 7.
          // tension: 10, //Controls speed. Default 40.
          speed: 12, //Controls speed of the animation.Default 12.
          bounciness: 0.1, //Controls bounciness. Default 8.
        }}
      >
        <FastImage
        onLoadStart={e => {setLoading(true)}}
        onProgress={e =>
        console.log('Loading Progress ' + e.nativeEvent.loaded / e.nativeEvent.total+new Date())
        }
        onLoad={e =>
        console.log('Loading Loaded ' + e.nativeEvent.width, e.nativeEvent.height+new Date())
        }
        onLoadEnd={e => setLoading(false)}
          style={{ width: "100%", height: "100%" }}
          source={{
            uri: url,
            priority: FastImage.priority.normal,
          }}
          resizeMode={
            isOpen ? FastImage.resizeMode.contain : FastImage.resizeMode.cover
          }
        />
      </Lightbox>
      {isLoading && <LoadingView/>}

    </View>
  );
};
export default Index;
