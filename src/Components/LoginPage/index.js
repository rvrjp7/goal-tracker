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
                    <label htmlFor='uName'>Username</label>
                    <input type={'text'} name='uName' {...register('uName')}></input>
                    <label htmlFor='pwd'>password</label>
                    <input type={'password'} name='pwd' {...register('pwd')}></input>
                    <input type={'submit'} value={'submit'}></input>
                </LoginPageContainer>
            }
        </>
     );
}

export default LoginPage;