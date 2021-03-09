import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  display: flex;
  flex: 1;
  background: #fff;
  padding: 30px 15px;
`;

export const Logo = styled.Image`
  height: 60px;
  width: 135px;
  margin: 0 auto 10px;
`;

export const Title = styled.Text`
  font-size: 30px;
  line-height: 32px;
  color: #000;
  font-family: 'CircularStd-Black';

  margin-top: 20px;
`;

export const Description = styled.Text`
  font-size: 16px;
  line-height: 20px;
  color: #66666d;
  font-family: 'CircularStd-Medium';
  margin-top: 5px;
`;

export const Subtitle = styled.Text`
  font-size: 20px;
  line-height: 25px;
  color: #000;
  font-family: 'CircularStd-Black';

  margin-top: 25px;
`;

export const ContainerItem = styled(RectButton)`
  width: 100%;
  height: 90px;
  margin-bottom: 20px;
  background-color: #f3f3f4;
  border-radius: 12px;
  padding: 8px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  position: relative;
`;
