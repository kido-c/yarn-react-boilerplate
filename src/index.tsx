import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './modules'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

const container = document.getElementById('root') as HTMLElement
const root = ReactDOMClient.createRoot(container)

const store = createStore(rootReducer)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
