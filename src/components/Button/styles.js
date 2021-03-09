import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import {Subtitle} from '../../pages/Home/styles';
export const Container = styled(RectButton)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 56px;
  width: 100%;
  border-radius: 12px;
  background-color: #8264e2;
  margin-bottom: 20px;
`;

export const Label = styled(Subtitle)`
  font-size: 14px;
  font-family: 'CircularStd-Bold';
  color: #fff;
  margin: 0;
`;
