/**
    * @description      : 
    * @author           : Admin
    * @group            : 
    * @created          : 27/12/2023 - 15:45:14
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 27/12/2023
    * - Author          : Admin
    * - Modification    : 
**/
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./css/index.css"
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import appStore from './utils/appStore.js'
import ScrolltoTop from './utils/ScrolltoTop.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={appStore}>
    <Router>
      <React.StrictMode>
        <ScrolltoTop />
        <App />
      </React.StrictMode>,
    </Router>
  </Provider>
)