import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

export const Container = styled.View`
  position: relative;
  width: 100%;
  height: 56px;
  margin-bottom: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #550073;
`;

export default StyleSheet.create({
  label: {
    fontFamily: 'CircularStd-Bold',
    position: 'absolute',
    zIndex: -1,
  },

  textInput: {
    fontFamily: 'CircularStd-Book',
    fontSize: 15,
    backgroundColor: 'transparent',
    width: '100%',
    height: 40,
    color: '#12121D',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
});
