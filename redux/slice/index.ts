import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface TaksSliceState {
    loading: boolean | null;
    tasks: Task[];
    error: string | null;
};

export interface Task {
    id: string;
    title: string;
    description: string;
    completed: boolean;
};

export const initialTaskState: TaksSliceState = {
    loading: false,
    tasks: [],
    error: null,
};

export const taskstSlice = createSlice({
    name: 'task-list',
    initialState: initialTaskState,
    reducers: {
        Tasks: (state) => {
            return state;
        },
        AddTask: (state, action: PayloadAction<any>) => {
            state.tasks.push(action.payload);
        },
    }
});

export const { Tasks, AddTask } = taskstSlice.actions;
