import React from 'react';
import '../styles/components/App.scss';

import FormContainer from '../containers/FormContainer';

const App = () =>{
  return (
    <div>
      <div className="row app">
        <h1>Resource Library</h1>
      </div>
      <div className="form">
        <FormContainer />
      </div>
    </div>
  );
};

export default App;
