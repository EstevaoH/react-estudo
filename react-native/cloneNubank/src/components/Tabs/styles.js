import styled from 'styled-components/native';

export const Container = styled.View`
  height: 100px;
  margin-top: 20px;
`;

export const TabsContainer = styled.ScrollView.attrs({
  contentContainerStyle: { paddingLeft: 10, paddingRight: 20 },
  horizontal: true,
  showHorizontalScrollViewIndicator: false,
})``;

export const TabsItem = styled.View`
  width: 100px;
  height: 100px;
  background: rgb(255, 255, 255, 0.2);
  border-radius: 3px;
  margin-left: 10px;
  padding: 10px;
  justify-content: space-between;
  `;

export const TabText = styled.Text`
  font-size: 13px;
  color: #fff;
`;