import React, { useContext } from 'react'
import { Text, View, } from 'react-native'
import styled from 'styled-components/native'
import TodoItem from '../todolist/items/TodoItem';
import { TodoContext } from '../../../todo-context'

const DoneList = () => {

    const { done } = useContext(TodoContext)

    return (
        <DoneListContainer>
            {
                done.map(item => {
                    return (
                        <TodoItem key={Math.random()} completed={true} id={item.id} time={item.time} title={item.name} desc={item.desc} />
                    )
                })}
        </DoneListContainer>
    );
}


const DoneListContainer = styled.View`
    color: #ffffff;
    position: absolute;
    width: 100%;
`;



export default DoneList;

