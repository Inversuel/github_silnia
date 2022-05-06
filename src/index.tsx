import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.scss';
import App from './App';
import { store } from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GitHubPage from "./pages/GitHubPage";
import SilniaPage from "./pages/SilniaPage";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/github" element={<GitHubPage />} />
        <Route path="/silnia" element={<SilniaPage />} />
      </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
