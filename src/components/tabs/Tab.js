import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import styled from 'styled-components/native'

const Tabs = ({ title, pressed }) => {



    return (
        <TabContainer style={pressed ? styles.btnPress : styles.btnNormal}>
            <Title>{title}</Title>
        </TabContainer>
    );
}


const TabContainer = styled.View`
    color: #ffffff;
    padding-top: 0px;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    margin: 0 10px;
    background: #246BFD;
    padding: 10px;
    border-radius: 10px;
    min-width: 80px;
    text-align: center;
    height: 40px;
`;

const Title = styled.Text`
    color: #ffffff;
    font-size: 16px;
    font-family: 'SFPRO-Regular'
`;


var styles = StyleSheet.create({
    btnNormal: {
        backgroundColor: '#262A34',
    },
    btnPress: {
        backgroundColor: '#246BFD',
    }
});


export default Tabs;

