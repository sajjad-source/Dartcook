import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/app';
import './styles.css';

const root = createRoot(document.getElementById('main'));
root.render(<App />);
