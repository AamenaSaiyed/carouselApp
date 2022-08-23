import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import {OptimizedImage} from '../../Components';
import {hp, wp} from '../../Utilities/ResponsiveLayout';
const Index = props => {
  const [image, setImages] = useState([]);
  const DummyData = [
    {
      title: 'Article ',
    },
    {
      title: 'Article ',
    },
    {
      title: 'Article ',
    },
    {
      title: 'Article ',
    },
    {
      title: 'Article ',
    },
    {
      title: 'Article ',
    },
    {
      title: 'Article ',
    },
    {
      title: 'Article ',
    },
    {
      title: 'Article ',
    },
    {
      title: 'Article ',
    },
  ];

  const _renderGrids = ({item, index}) => {
    ++index;
    return (
      <View
        style={{
          borderWidth: 1,
          borderRadius: wp(8),
          width: '48%',
          height: hp(140),
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
        }}>
        <OptimizedImage

          {...props}
        />
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <View style={{marginHorizontal: wp(20), marginTop: hp(20)}}>
        <FlatList
          data={image}
          renderItem={_renderGrids}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={{
            justifyContent: 'space-between',
            marginBottom: hp(20),
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};
export default Index;
