import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import { DropDown, OptimizedImage } from "../../Components";
import { hp, wp } from "../../Utilities/ResponsiveLayout";
import {
  getBreeds,
  getCatsList,
  getCatsListByBreed,
} from "../../APi/Services/ApiServices";
import styles from "./styles";
import Colors from "../../Theme/Colors";

const Index = (props) => {
  const [image, setImages] = useState([]);
  const [Breed, setBreed] = useState([]);
  const [refreshing, setRefresh] = useState(false);

  useEffect(() => {
    GetCatsList();
    getBreedData();
  }, []);

  // get Cat list
  const GetCatsList = async () => {
    const body = {
      limit: 10,
    };
    var response = await getCatsList(body);
    if (response.status == "200") {
      setImages(response.data);
      setRefresh(false);
    }
  };

  // get Cat Breeds

  const getBreedData = async () => {
    var response = await getBreeds();
    if (response.status == "200") {
      var modefiedData = response.data;
      modefiedData.map((item, index) => {
        item.label = item.name;
        item.value = item.name;
        return item;
      });
      setBreed(modefiedData);
    }
  };

  // get Cats by breedtype
  const getCatsBybreed = async (data) => {
    const body = {
      limit: 10,
      breed_ids: data.id,
    };
    var response = await getCatsListByBreed(body);
    if (response.status == "200") {
      setImages(response.data);
      console.log(response);
    }
  };
  const _renderGrids = ({ item, index }) => {
    // render Cat Image cells
    return (
      <View style={styles.columnWrapper}>
        <OptimizedImage url={item.url} {...props} />
      </View>
    );
  };
  const _handleRefresh = () => {
    setRefresh(true);
    setTimeout(() => {
      GetCatsList();
    }, 750);
  };
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          height: hp(60),
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: Colors.Firefly,
            fontWeight: "600",
            fontSize: wp(20),
            textDecorationStyle: "solid",
            textDecorationLine: "underline",
            lineHeight: 22,
          }}
        >
          {"Cats & Breeds"}
        </Text>
      </View>
      <View key={refreshing} style={styles.dropDownContainer}>
        {/* Render dropdown with breed types */}
        <DropDown
          selectCallback={(data) => {
            getCatsBybreed(data);
          }}
          dropdownData={Breed}
        />
      </View>
      <View style={styles.listwrapper}>
        <FlatList
          data={image}
          renderItem={_renderGrids}
          numColumns={2}
          refreshing={refreshing}
          onRefresh={_handleRefresh}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={styles.columnWrappercontainer}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};
export default Index;
