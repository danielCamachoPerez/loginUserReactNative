import React, { useEffect, useState } from 'react';
import { FlatList, RefreshControl, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { actionTasks } from '../../redux/action';
import { RootState } from '../../redux/store';

const TasksList = () => {
    const { tasks } = useSelector((state: RootState) => state);
    const [refreshing, setRefreshing] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actionTasks() as any);
    }, [tasks.tasks]);
    console.log("tasks: ", tasks.tasks);

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(actionTasks() as any);
    setTimeout(() => {
        setRefreshing(false);
    }, 2000);
  };
    return (
        <View>
            <FlatList
                data={tasks.tasks}
                renderItem={({ item }) => <Text>{item.title}</Text>}
                keyExtractor={(item) => item.id}
                ListEmptyComponent={() => <Text>No tasks</Text>}
                refreshControl={
                    <RefreshControl
                      refreshing={refreshing}
                      onRefresh={onRefresh}
                    />
                }
            />
        </View>
    );
};

export default TasksList;
