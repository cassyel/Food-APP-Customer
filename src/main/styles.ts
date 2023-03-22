import styled from 'styled-components/native';
import { StatusBar } from 'react-native';
import { isAndroid } from '../utils/isAndroid';

export const Container = styled.SafeAreaView`
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : '0'};
  flex: 1;
  background: #fafafa;
`;

export const CategoriesContainer = styled.View`
  height: 73px;
  margin-top: 34px;
  align-items: center;
`;

export const MenuContainer = styled.View`
  flex: 1;
`;

export const FooterContainer = styled.View`
  min-height: 110px;
  background-color: #ffffff;
  padding: 16px;
` ;
