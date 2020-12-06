import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styled from 'styled-components/native'

const Navbar = () => {
    return (

        <NavbarContainer>
            <Title>TodoList</Title>
        </NavbarContainer>

    );
}


const NavbarContainer = styled.View`
    color: #ffffff;
`;

const Title = styled.Text`
    color: #ffffff;
    font-size: 21px;
    font-family: 'SFPRO-Bold'
`;


export default Navbar;

