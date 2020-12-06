import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import Tab from './Tab'

const Tabs = ({ tabChange, tab }) => {

    const handlePress = (n) => {
        tabChange(n);
    }

    return (
        <TabsContainer>
            <TouchableOpacity onPress={() => handlePress(0)}>
                <Tab pressed={!tab} title='All todos' />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress(1)}>
                <Tab pressed={tab} title='Done' />
            </TouchableOpacity>
        </TabsContainer>
    );
}


const TabsContainer = styled.View`
    color: #ffffff;
    justify-content: flex-start;
    flex-direction: row;
    padding-top: 50px;
    margin-bottom: 55px;
`;





export default Tabs;

