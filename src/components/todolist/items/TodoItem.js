import React, { useContext, useState } from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { TodoContext } from '../../../../todo-context'


const TodoItem = ({ id, completed, time, title, desc }) => {


    const { removeTask, completeTask } = useContext(TodoContext);

    const [state, setState] = useState({
        open: false
    })

    const itemToggle = () => setState({ open: !state.open });

    return (
        <View>
            <TouchableOpacity onPress={() => itemToggle()}>
                <TodoItemContainer style={state.open ? styles.itemClose : styles.itemOpen}>
                    <TodoContainer style={state.open ? styles.open : styles.close} >
                        <Check style={completed ? styles.open : styles.close}>
                            <TouchableOpacity onPress={() => completed ? null : completeTask(id)}>
                                <InnerCircle>
                                    <Image
                                        style={styles.tinyCheck}
                                        source={require('../../../../assets/check.png')}
                                    />
                                </InnerCircle>
                            </TouchableOpacity>
                        </Check>
                        <Content>
                            <Title>
                                {title}
                            </Title>
                            <Time>
                                {time}
                            </Time>
                        </Content>

                        <TouchableOpacity onPress={() => removeTask(completed, id)}>
                            <Delete>
                                <Text>
                                    ❌
                             </Text>
                            </Delete>
                        </TouchableOpacity>
                    </TodoContainer>
                    <DescriptionContainer style={state.open ? styles.close : styles.open}>
                        <LilTitle>
                            Description
                        </LilTitle>
                        <DescText>
                            {desc}
                        </DescText>

                    </DescriptionContainer>
                </TodoItemContainer >

            </TouchableOpacity>
        </View >
    );
}

const styles = StyleSheet.create({
    tinyCheck: {
        width: 14,
        height: 11
    },
    itemOpen: {
        minHeight: 70,
    },
    itemClose: {
        minHeight: 250,
    },
    open: {
        display: 'none',
    },
    close: {
        display: 'flex',
    }

})

const LilTitle = styled.Text`
        color: #c4c4c4;
    align-items: flex-start;
        font-size: 14px;
    font-family: 'SFPRO-Regular'
    margin-bottom: 15px;
    width: 100%;
`

const DescText = styled.Text`
        color: #ffffff;
    align-items: flex-start;
        font-size: 16px;
    font-family: 'SFPRO-Medium'
    width: 100%;
    width: 100%;
`

const TodoItemContainer = styled.View`
    color: #ffffff;
    align-self: stretch;
    border-radius: 10px;
    width: 100%;
    justify-content: space-between;
    flex-direction: row;
    padding: 20px 20px;
    border: 1px solid #262A34;
    margin-bottom: 15px;
`;

const TodoContainer = styled.View`
    color: #ffffff;
    align-self: stretch;
    border-radius: 10px;
    width: 100%;
    justify-content: space-between;
    flex-direction: row;
`;


const DescriptionContainer = styled.View`
    color: #ffffff;
    padding: 0px 10px;
    width: 100%;
`;

const ModalContainer = styled.View`
    min-height: 100%;
    padding: 10%;
    width: 100%;
    background: #fff;
    z-index: 1000;

`;


const Check = styled.View`
    height: 100%;
    width: 50px;
    border-radius: 50px;
    align-items: center;
    justify-content: center;
    height: 50px;
    margin-left: -10px;
    background: #262A34;
`;
const InnerCircle = styled.View`
    width: 32px;
    height: 32px;
    align-items: center;
    justify-content: center;
    background: #79B363;
    border-radius: 50px;
`;

const Title = styled.Text`
    color: #ffffff;
    align-items: flex-start;
        font-size: 18px;
    font-family: 'SFPRO-Medium'
    margin-bottom: 5px;
`;
const Time = styled.Text`
    color: #79B363;
    align-items: flex-start;
    font-size: 14px;
    font-family: 'SFPRO-Regular'
`;

const Delete = styled.View`
    color: #ffffff;
    height: 100%;
    opacity: .4;
    align-items: stretch;
    width: 50px;
    border-radius: 50px;
    justify-content: center;
    height: 50px;
    align-items: center;
`;

const Content = styled.View`
    color: #ffffff;
    align-items: flex-start;
    width: 60%;
    justify-content: center;
`;



export default TodoItem;

