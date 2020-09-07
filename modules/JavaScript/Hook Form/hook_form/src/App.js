import React, { useState } from 'react';
import './App.css';

import UserForm from './components/form';
import FormData from './components/form_data';

const App = () => {
  const [state, setState] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  return (
    <div className="App">
      <UserForm inputs={state} setInputs={setState}></UserForm>
      <FormData state={state}/>
    </div>
  );
}

export default App;
