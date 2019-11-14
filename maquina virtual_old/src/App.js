import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import Tela from './components/tela/Tela'
import Container from '@material-ui/core/Container'

function App() {
  return (
    <Container maxWidth="xl">
      <div >
        <Tela />
      </div>
    </Container>
  );
}

export default App;
