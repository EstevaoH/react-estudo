import React, { Component } from 'react'
import { Text, View } from 'react-native';
import { Container, TabsContainer, TabText, TabItem } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';


export default class Tabs implements Component {
  render() {
    return (
      <Container>
        <TabsContainer>
          <TabItem>
            <Icon name="person-add" size={24} color="#ff" />
            <TabText>
              Indicar Amigos
            </TabText>
          </TabItem>
        </TabsContainer>
      </Container>
    );

  }

}
