import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './app/store.js'
import { createGlobalStyle, css } from 'styled-components'


const GlobalStyle = createGlobalStyle(css`
  body{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle/>
      <App />
    </Provider>
  </React.StrictMode>,
)
