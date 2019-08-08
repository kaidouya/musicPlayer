import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/styles';
import theme from './styles';
import './index.css';
import App from './App';

function MusicPlayer() {
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
}
ReactDOM.render(<MusicPlayer />, document.getElementById('root'));
