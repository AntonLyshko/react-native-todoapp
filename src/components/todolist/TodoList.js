import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import styled from 'styled-components/native'
import TodoItem from './items/TodoItem';
import { TodoContext } from '../../../todo-context'

const TodoList = () => {

    const { todo } = useContext(TodoContext)

    return (
        <TodoListContainer>



            {todo.map(item => {
           
                return (
                    <TodoItem key={Math.random()} completed={false} id={item.id} time={item.time} title={item.name} desc={item.desc} />
                )
            })}


        </TodoListContainer>
    );
}


const TodoListContainer = styled.View`
    color: #ffffff;
    position: absolute;
    width: 100%;
`;



export default TodoList;

