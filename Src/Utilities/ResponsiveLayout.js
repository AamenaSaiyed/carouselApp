/**
 * File to return aspect ratio value for height and width
 */

import {Dimensions} from 'react-native';

let windowWidth = Dimensions.get('window').width;
let windowHeight = Dimensions.get('window').height;

function wp(width) {
  return (windowWidth * width) / 375;
}

function hp(height) {
  return (windowHeight * height) / 812;
}

export {wp, hp, windowHeight, windowWidth};
