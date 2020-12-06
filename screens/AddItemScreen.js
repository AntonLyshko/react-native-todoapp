import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native'
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';



const AddItemScreen = ({ route, navigation }) => {

    const [state, setState] = useState({
        taskName: '',
        taskDesc: '',
        taskTime: '',
        isDateTimePickerVisible: false
    })


    const onChangeText = (text, name) => {
        setState({ ...state, [name]: text })
    }

    const _showDateTimePicker = () => setState({ ...state, isDateTimePickerVisible: true });

    const _hideDateTimePicker = () => setState({ ...state, isDateTimePickerVisible: false });

    const _handleDatePicked = (date) => {
        let newDate = moment(date).format('DD MMMM');
        setState({ ...state, taskTime: newDate, isDateTimePickerVisible: false })
    };

    const doneHandler = () => {
        let length = route.params.length;
        length += 1;
        navigation.navigate('Todo', {
            name: state.taskName, desc: state.taskDesc, time: state.taskTime, length: length
        })
    }

    const todayHandle = () => {
        setState({ ...state, taskTime: 'Today' })
    }

    return (
        <Container>
            <ScreenTitle>
                Add your task 🔥
            </ScreenTitle>
            <TextInput
                style={styles.taskInput}
                placeholderTextColor="#c4c4c4"
                onChangeText={text => onChangeText(text, 'taskName')}
                value={state.taskName}
                placeholder='Свернуть горы 🗻'
            />
            <TextInput
                style={styles.descInput}
                placeholderTextColor="#c4c4c4"
                onChangeText={text => onChangeText(text, 'taskDesc')}
                value={state.taskDesc}
                multiline={true}
                placeholder='Невероятно продуманный план'
                numberOfLines={8}
            />

            <TouchableOpacity onPress={() => _showDateTimePicker()}>
                <DateText>
                    🕓  {state.taskTime ? state.taskTime : 'Select Date'}
                </DateText>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => todayHandle()}>
                <DateText>
                    Select - Today
                </DateText>
            </TouchableOpacity>


            <DateTimePicker
                isVisible={state.isDateTimePickerVisible}
                onConfirm={_handleDatePicked}
                onCancel={_hideDateTimePicker}
            />

            <BtnContainer>
                <TouchableOpacity onPress={() => navigation.navigate('Todo')}>
                    <Cancel>Cancel</Cancel>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => doneHandler()}>
                    <Btn>Done</Btn>
                </TouchableOpacity>


            </BtnContainer>
        </Container>

    );
}

const styles = StyleSheet.create({
    taskInput: {
        height: 45,
        borderColor: '#262A34',
        borderWidth: 1,
        marginBottom: 30,
        borderRadius: 10,
        color: '#ffffff',
        fontSize: 16,
        fontFamily: 'SFPRO-Regular',
        paddingLeft: 15
    },
    descInput: {
        borderColor: '#262A34',
        borderWidth: 1,
        marginBottom: 30,
        borderRadius: 10,
        color: '#ffffff',
        fontSize: 16,
        fontFamily: 'SFPRO-Regular',
        padding: 15,
        justifyContent: "flex-start",
        textAlignVertical: 'top'
    }

})

const DateText = styled.Text`
    color: #ffffff;
    font-family: 'SFPRO-Regular'
    border-radius: 20px;
    font-size: 16px;
    align-items: center;
    padding: 10px 25px;
    margin-bottom: 20px;
    color: #79B363;
`;

const Container = styled.View`
  display: flex;
  flex: 1;
  padding: 5%;
  padding-top: 10%;
  width: 100%;
  color: #ffffff;
  background: #181A20;
  position: relative;
`;

const TaskInput = styled.TextInput`
    font-size: 18px;
    heigth: 45px;
    width: 100%;
    font-family: 'SFPRO-Regular'
`;

const ScreenTitle = styled.Text`
    color: #ffffff;
    font-size: 32px;
    font-family: 'SFPRO-Bold'
    margin-bottom: 30px;
`;

const Cancel = styled.Text`
    color: #FC9790;
    font-family: 'SFPRO-Regular'
    font-size: 16px;
    align-items: center;
    padding: 10px 25px;
    align-items: center;
    justify-content: center;
`;

const Btn = styled.Text`
    color: #ffffff;
    font-family: 'SFPRO-Regular'
    border-radius: 20px;
    background: #246BFD;
    font-size: 16px;
    align-items: center;
    padding: 10px 25px;
`;

const BtnContainer = styled.View`
    width: 90%;
    position: absolute;
    bottom: 5%;
    justify-content: space-between;
    flex-direction: row;
`;

export default AddItemScreen;
