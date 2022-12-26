import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import ErrorBoundary from './components/errorBoundary/ErrorBoundary';
import Main from './page/main/Main';

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <RecoilRoot>
          <Routes>
            <Route path='/' element={<Main />} />
          </Routes>
        </RecoilRoot>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
