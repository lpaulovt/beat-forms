import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

export const Container = styled.ScrollView`
  display: flex;
  flex: 1;
  width: 100%;
  background: #fff;
  padding: 30px 15px;
`;

export const Logo = styled.Image`
  height: 60px;
  width: 135px;
  margin: 0 auto 10px;
`;

export default StyleSheet.create({
  containerInput: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
