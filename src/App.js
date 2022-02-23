import React from 'react';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import ReviewList from './pages/ReviewList';
import Detail from './pages/Detail';

function App() {
  return (
    <AppComponent>
      <Routes>
        <Route path="/" element={<ReviewList />} />
        <Route path="/details/:id" element={<Detail />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </AppComponent>
  );
}

export default App;

const AppComponent = styled.div`
  max-width: 500px;
  margin: auto;
`;
