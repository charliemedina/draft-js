import React, { Component } from 'react';
import './App.css';
import PageContainer from './components/PageContainer'
import RichEditor from './components/RichEditorExample';


class App extends Component {
  render() {
    return (
      <div className="App">
        <PageContainer />
        <RichEditor />
      </div>
    );
  }
}

export default App;
