import { StyleSheet } from "react-native";
import { hp, wp } from "../../Utilities/ResponsiveLayout";
const styles = StyleSheet.create({
  columnWrapper: {
    borderRadius: wp(8),
    width: "49%",
    height: hp(140),
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  listwrapper: {
    flex:1,
     marginHorizontal: wp(5),
      marginTop: hp(10) 
    },
  columnWrappercontainer: {
    justifyContent: "space-between",
    marginBottom: hp(5),
  },
  dropDownContainer: {
    height: hp(50),
    justifyContent: "center",
    borderRadius: wp(12),
  },
});

export default styles;
