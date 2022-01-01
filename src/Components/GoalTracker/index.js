import React, { useState, useContext, useEffect, useCallback, useMemo } from 'react';
import { AppContainer } from './GoalTracker.styles';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
function GoalTracker() {
    const logInState = useSelector(state => state.logInState);
    const [taskList, setTaskList] = useState([]);
    const [addTask, setAddTask] = useState(false);
    const {register, handleSubmit}=useForm();
    const onAddTask = (params) => {
        setAddTask(true);
    }
    const onSubmit = (data) => {
        console.log(data);
        setAddTask(false);
        taskList.push(data);
        setTaskList([...taskList]);
        
    }
    useEffect(()=>{
        console.log(taskList);
    },[taskList])
    return (  
        <>
        {
            !logInState?<></>:
                <AppContainer>
                    {
                        addTask?
                        <div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input type={'text'} {...register('task')}></input>
                                <input type={'number'} {...register('targetDays')}></input>
                                <input type={'submit'} value={'submit'}></input>
                            </form>
                        </div>
                        :
                        <>
                        <button onClick={onAddTask}>Add New Task</button>
                        {taskList.length>0 && 
                        <table>
                            <thead>
                                <tr>
                                    <th>Task</th>
                                    <th>Targeted Days</th>
                                    <th>Coming soon...</th>
                                    <th>Coming soon...</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                taskList.map((task, index)=>
                                    <tr key={'item-'+index}>
                                        <td>{task.task}</td>
                                        <td>{task.targetDays}</td>
                                        <td>Coming soon...</td>
                                        <td>Coming soon...</td>
                                    </tr>
                                )
                            }
                            </tbody>
                        </table>
                        }
                        </>
                    }
                Test
                </AppContainer>
        }
        </>
        
    );
}

export default GoalTracker;