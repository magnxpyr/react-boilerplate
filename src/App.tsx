import React from 'react';
import Routes from './routes';
import './App.scss';
import Header from "./shared/layout/header";
import {Container} from "reactstrap";

export const App = () => {
  return (
      <div>
        <Header />
        <Container>
            <Routes />
        </Container>
      </div>
  );
}

export default App;
