import logo from './logo.svg';
import './App.css';
import GoalTracker from './Components/GoalTracker';
import LoginPage from './Components/LoginPage';
import { useState } from 'react';
import { createStore } from 'redux';
import rootReducer from './Redux';
import { Provider,useSelector } from 'react-redux';
function App() {
  const store = createStore(rootReducer);
  return (
    <Provider store={store}>
      <div className="App">
      {<LoginPage></LoginPage>}
      {<GoalTracker></GoalTracker>}
      </div>
    </Provider>
  );
}

export default App;
