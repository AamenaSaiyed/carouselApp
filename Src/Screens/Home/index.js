import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import {DropDown, OptimizedImage} from '../../Components';
import {hp, wp} from '../../Utilities/ResponsiveLayout';
import {getBreeds, getCatsList} from '../../APi/Services/ApiServices';
import styles from './styles';
const Index = props => {
  const [image, setImages] = useState([]);
const [Breed,setBreed]=useState([])
  useEffect(() => {
    GetCatsList();
      getBreedData()

  }, []);
  const GetCatsList = async () => {
    const body = {
      limit: 10,
    };
    var response = await getCatsList(body);
    if (response.status == '200') {
      setImages(response.data);
      // getBreedData()
    }
  };
  const getBreedData=async()=>{
    var response=await getBreeds();
    // console.log('BREEDS DATA'+JSON.stringify(response.data.length))
    if (response.status == '200') {
      var modefiedData=response.data
      modefiedData.map((item,index)=>{
        item.label=item.name;
        item.value=item.name;
        return item
      })
    setBreed(modefiedData)
      
    }
  }
  const _renderGrids = ({item, index}) => {
    console.log(item)
    return (
      <View
        style={styles.columnWrapper}>
        <OptimizedImage
        
          url={item.url}
          {...props}
        />
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <View style={{height:hp(50),justifyContent:'center',marginHorizontal:wp(5),borderRadius:wp(12)}}>
      <DropDown dropdownData={Breed} />
      </View>
      <View style={styles.listwrapper}>
        <FlatList
          data={image}
          renderItem={_renderGrids}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={styles.columnWrappercontainer}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};
export default Index;
