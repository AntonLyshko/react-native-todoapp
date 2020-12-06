import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Button } from 'react-native';
import Navbar from '../src/navbar/Navbar'
import styled from 'styled-components/native'
import Main from '../src/main/Main'
import { TodoContext } from '../todo-context'


const TodoScreen = ({ route, navigation }) => {

    const [state, setState] = useState({
        todo: [{ id: 1, name: 'Check out the app', desc: "1. Add task 2.Complete task 3.Poke something", time: 'Now' }],
        done: [{ id: 0, name: 'Get to know React Native', desc: "Do a todo app", time: 'In the past' }]
    })

    const { todo, done } = state;

    useEffect(() => {
        if (route.params) {
            if (route.params.length > todo.length) {
                addTask(route.params.name, route.params.desc, route.params.time)
                route.params = ''
            }
        }
    })

    const addTask = (name, desc, time) => {
        let newId = todo.length + 1;
        let newItem = new Task(newId, name, desc, time);
        let newTodo = [newItem, ...state.todo];
        setState({ ...state, todo: newTodo })
    }

    const removeTask = (completed, id) => {
        var newList;
        if (completed) newList = done.slice();
        else newList = todo.slice();
        for (let i = 0; i < newList.length; i++) {
            if (newList[i].id == id) {
                newList.splice(i, 1);
                break;
            }
        }
        if (completed) setState({ ...state, done: newList })
        else setState({ ...state, todo: newList })

    }

    const completeTask = (id) => {
        var newTodo = todo.slice();
        let newDone;
        for (let i = 0; i < newTodo.length; i++) {
            if (newTodo[i].id == id) {
                newDone = [...done, newTodo[i]];
                newTodo.splice(i, 1);
                break;
            }
        }
        setState({ ...state, todo: newTodo, done: newDone })
    }

    function Task(id, name, desc, time) {
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.time = time;
    }


    return (

        <TodoContext.Provider value={{ todo, done, addTask, removeTask, completeTask }}>
            < Container >
                <Navbar />
                <Main />
            </Container>
            <AddBtnContainer>
                <TouchableOpacity onPress={() => navigation.navigate('AddItem', {
                    length: todo.length
                })}>
                    <AddBtn>
                        <Image
                            style={styles.tinyTrigger}
                            source={require('../assets/trigger.png')}
                        />
                    </AddBtn>
                </TouchableOpacity>
            </AddBtnContainer>
        </TodoContext.Provider>

    );
}

const styles = StyleSheet.create({
    tinyTrigger: {
        width: 28,
        height: 28
    }
})


const Container = styled.ScrollView`
  display: flex;
  flex: 1;
  background: #181A20;
  padding: 5%;
  padding-top: 10%;
`;


const AddBtnContainer = styled.View`
    position: absolute;
    bottom: 5%;
    left: 42.5%;
    width: 15%;
    height: 7.5%;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    
`;

const AddBtn = styled.View`
    width: 50px;
    height: 50px;
    background: #246BFD;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    border-radius: 50px;
    text-align: center;
`;


export default TodoScreen;
