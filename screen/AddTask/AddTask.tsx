import React, { useState } from 'react';
import { Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { TextField, TextTitle, ViewContainer } from './style';
import { Task } from '../../redux/slice';
import { actionAddTask } from '../../redux/action';

const AddTask = (props: any) => {
    const uuid = new Date().getTime().toString();
    const { tasks } = useSelector((state: RootState) => state);
    const [taskForm, setTaskForm] = useState<Task>({
        id: uuid,
        title: '',
        description: '',
        completed: false,
    });
    const dispatch = useDispatch();
    const handleClickAddTask = () => {
        dispatch(actionAddTask(taskForm) as any);
        console.log("update-tasks: ", tasks.tasks);
        //props.navigate('TasksList');
    };
    return (
        <ViewContainer>
            <TextTitle>Nueva tarea</TextTitle>
            <TextField
                placeholder="Tasks name"
                keyboardType="default"
                onChangeText={(value: string) => setTaskForm({ ...taskForm, title: value })}
            />
            <TextField
                style={{ height: 100 }}
                placeholder="Description"
                keyboardType="default"
                onChangeText={(value: string) => setTaskForm({ ...taskForm, description: value })}
            />
            <Button
                title="Create Task"
                onPress={handleClickAddTask}
            />
        </ViewContainer>
    );
};

export default AddTask;
