import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,

} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import styles from './styles';

const Index=(props)=>{

const {dropdownData,selectedData,selectCallback}=props;

    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const renderLabel = () => {
      if (value || isFocus) {
        return (
          <Text style={[styles.label, isFocus && { color: 'blue' }]}>
            Select Breed
          </Text>
        );
      }
      return null;
    };
    return(
        <View style={styles.container}>
        {renderLabel()}
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={dropdownData}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select Breed' : '...'}
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
            selectCallback(item)
          }}
        />
      </View>
    )
}
export default Index