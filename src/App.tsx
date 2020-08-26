import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";

import { ThunkDispatchTodo, thunkFetchTodo } from './store/thunks';

import { Header } from './components/Header';
import { Footer } from './components/Footer';


import logo from './logo.svg';
import './App.scss';

const App: React.FunctionComponent = () => {
  const thunkDispatch = useDispatch<ThunkDispatchTodo>();

  useEffect(() => {    
    thunkDispatch(thunkFetchTodo());
  }, []);

    return <>
      <Header message="TTS" logo={logo} />
      
      <Footer logo={logo} />
    </>
  
}

export default App;
