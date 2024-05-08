import { Dispatch } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AddTask, Tasks, initialTaskState } from '../slice';

export const actionTasks = () => (dispatch: Dispatch) => {
    try {
        dispatch(Tasks());
    } catch (error: any) {
        console.error("Error fetching tasks: ", error);
    }
};

export const actionAddTask = (task: any) => (dispatch: Dispatch) => {
    try {
        console.log("tasks add: ", task);
        dispatch(AddTask(task));
    } catch (error: any) {
        console.error("Error adding task: ", error);
    }
};
