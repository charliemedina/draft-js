import React, { Component } from 'react';
import './App.css';
import PageContainer from './components/PageContainer'
import RichEditorExample from './components/RichEditorExample';


class App extends Component {
  render() {
    return (
      <div className="App">
        <PageContainer />
        <RichEditorExample />
      </div>
    );
  }
}

export default App;
