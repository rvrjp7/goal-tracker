import React, { useState, useContext, useEffect, useCallback, useMemo } from 'react';
import { AppContainer } from './GoalTracker.styles';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { AddTaskContainer } from './GoalTracker.styles';
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
                            <AddTaskContainer onSubmit={handleSubmit(onSubmit)}>
                                <input 
                                className=' block h-100 w-500 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline m-2 ' 
                                placeholder='Enter task' type={'text'} {...register('task')}></input>
                                <input 
                                className='block w-200 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline m-2 ' 
                                placeholder='Enter targeted days' type={'number'} {...register('targetDays')}></input>
                                <input 
                                className='m-2 block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ' 
                                type={'submit'} value={'submit'}></input>
                            </AddTaskContainer>
                        </div>
                        :
                        <>
                        <button  onClick={onAddTask}
                        className='m-2 block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded '
                        >Add New Task</button>
                        {taskList.length>0 && 
                        <table className='border-collapse w-full border border-gray-400 dark:border-gray-500 bg-white dark:bg-gray-800 text-sm shadow-sm'>
                            <thead>
                                <tr>
                                    <th className='w-200 border border-gray-300 dark:border-gray-600 font-semibold p-4 text-gray-900 dark:text-gray-200 text-left'>Task</th>
                                    <th className='w-200 break-all border border-gray-300 dark:border-gray-600 font-semibold p-4 text-gray-900 dark:text-gray-200 text-left'>Targeted Days</th>
                                    <th className='w-200 break-all border border-gray-300 dark:border-gray-600 font-semibold p-4 text-gray-900 dark:text-gray-200 text-left'>Status</th>
                                    <th className='w-200 break-all border border-gray-300 dark:border-gray-600 font-semibold p-4 text-gray-900 dark:text-gray-200 text-left'>Might Motivate you</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                taskList.map((task, index)=>
                                    <tr key={'item-'+index}>
                                        <td className='w-200 break-all border border-gray-300 dark:border-gray-600 font-semibold p-4 text-gray-900 dark:text-gray-200 text-left'>{task.task}</td>
                                        <td className='w-200 break-all border border-gray-300 dark:border-gray-600 font-semibold p-4 text-gray-900 dark:text-gray-200 text-left'>{task.targetDays}</td>
                                        <td className='w-200 break-all border border-gray-300 dark:border-gray-600 font-semibold p-4 text-gray-900 dark:text-gray-200 text-left'>Coming soon...</td>
                                        <td className='w-200 break-all border border-gray-300 dark:border-gray-600 font-semibold p-4 text-gray-900 dark:text-gray-200 text-left'>Coming soon...</td>
                                    </tr>
                                )
                            }
                            </tbody>
                        </table>
                        }
                        </>
                    }
                </AppContainer>
        }
        </>
        
    );
}

export default GoalTracker;