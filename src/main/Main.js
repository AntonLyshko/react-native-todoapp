import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Animated, Dimensions } from 'react-native'
import styled from 'styled-components/native'
import Tabs from '../components/tabs/Tabs'
import TodoList from '../components/todolist/TodoList'
import DoneList from '../components/donelist/DoneList'

const { height, width } = Dimensions.get('window')


const Main = () => {

    const [tab, setTab] = useState(0);

    const animationTodo = useState(new Animated.ValueXY({ x: 0, y: 0 }))[0]
    const animationDone = useState(new Animated.ValueXY({ x: 0, y: 0 }))[0]

    useEffect(() => {
        Animated.timing(animationDone, {
            toValue: { x: width, y: 0 },
            duration: 0,
            useNativeDriver: false,
        }).start()
    }, [])


    const tabChange = (n) => {
        if (n === 0) {
            setTab(0)

            Animated.timing(animationTodo, {
                toValue: { x: 0, y: 0 },
                duration: 300,
                useNativeDriver: false,
            }).start()
            Animated.timing(animationDone, {
                toValue: { x: width, y: 0 },
                duration: 300,
                useNativeDriver: false,
            }).start()
        }
        else {
            setTab(1)
            Animated.timing(animationTodo, {
                toValue: { x: -width, y: 0 },
                duration: 300,
                useNativeDriver: false,
            }).start()
            Animated.timing(animationDone, {
                toValue: { x: 0, y: 0 },
                duration: 300,
                useNativeDriver: false,
            }).start()
        }
    }


    return (
        <MainContainer>
            <Title>Welcome,{"\n"}to my TodoList! 👋</Title>
            <Tabs tabChange={tabChange} tab={tab} />
            <ListContainer>
                <Animated.View style={animationTodo.getLayout()}>
                    <TodoList />
                </Animated.View>
                <Animated.View style={animationDone.getLayout()}>
                    <DoneList />
                </Animated.View>
            </ListContainer>

        </MainContainer>
    );
}


const MainContainer = styled.View`
    color: #ffffff;
    padding-top: 50px;
`;



const Title = styled.Text`
    color: #ffffff;
    font-size: 44px;
    font-family: 'SFPRO-Bold'
`;

const ListContainer = styled.View`
    min-height: ${height};
`;





export default Main;

