import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { LoginPageContainer } from './LoginPage.styles';
function LoginPage() {
    const {register, handleSubmit}=useForm();
    
  const logInState = useSelector(state => state.logInState);
  const dispatch = useDispatch();
    const onSubmit = (data) => {
        console.log(data);
        if(data.uName=='admin' && data.pwd == 'admin'){
            console.log('logIn');
            dispatch({type: "logInState", value:true});
        }
        
    }
    return ( 
        <>
            {logInState ? <></>:
                <LoginPageContainer onSubmit={handleSubmit(onSubmit)}>
                    <label className='block text-gray-700 text-sm font-bold m-auto w-full' htmlFor='uName'>Username</label>
                    <input className='shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline m-auto w-full' type={'text'} name='uName' {...register('uName')}></input>
                    <label className='mt-4 block text-gray-700 text-sm font-bold m-auto w-full' htmlFor='pwd'>password</label>
                    <input className='shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline m-auto w-full' type={'password'} name='pwd' {...register('pwd')}></input>
                    <input className='mt-4 block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ' type={'submit'} value={'submit'}></input>
                </LoginPageContainer>
            }
        </>
     );
}

export default LoginPage;