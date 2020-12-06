import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import styled from 'styled-components/native'


const WelcomeScreen = ({ navigation }) => {

    return (
        <Container>
            <Title>Learning app for getting to along with React Native ⚛️</Title>
            <ImageContainer>
                <Image
                    style={styles.bigCheck}
                    source={require('../assets/check.png')}
                />
            </ImageContainer>

            <BtnContainer>
                <Button title='Come In ➡️' color={'#246BFD'} onPress={() => navigation.navigate('Todo')} />
            </BtnContainer>

        </Container>

    );
}

const styles = StyleSheet.create({
    bigCheck: {
        width: 420,
        height: 330
    },
})


const ImageContainer = styled.View`
  position: absolute;
  top: 30%;
  right: -25%;
  opacity: 0.1;
`;

const Title = styled.Text`
    top: 20%;
    position: relative;
    color: #ffffff;
    font-size: 36px;
    margin-bottom: 50px;
    font-family: 'SFPRO-Bold'
`;

const Container = styled.View`
  display: flex;
  flex: 1;
  color: #ffffff;
  background: #181A20;
  padding: 5%;
  padding-top: 10%;
`;

const BtnContainer = styled.View`
  display: flex;
  flex: 1;
  color: #ffffff;
  background: #181A20;
  position: absolute;
  bottom: 10%;
  width: 90%;
  left: 10%;
`;



export default WelcomeScreen;
