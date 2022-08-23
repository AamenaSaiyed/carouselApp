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
  listwrapper: { marginHorizontal: wp(5), marginTop: hp(5) },
  columnWrappercontainer:{
    justifyContent: 'space-between',
    marginBottom: hp(5),
  }
});

export default styles;
