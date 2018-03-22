import React from 'react';
import '../styles/components/App.scss';

import FormContainer from '../containers/FormContainer';

class App extends React.Component {
  render(){
    return (
      <div>
        <div className="row app">
          App will go here
        </div>
        <div>
          <FormContainer />
        </div>
      </div>
    );
  };
}

export default App;
