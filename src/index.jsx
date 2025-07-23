// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import './styles/index.css'
// import './styles/variables.css'
// import './styles/App.css'
// import App from './components/App'
// import reportWebVitals from './reportWebVitals'

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()

import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from 'pages/Home'
import Concept from 'pages/Concept'
import Error from 'components/Error'
import 'styles/variables.css'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/coffee-books-shop/" element={<Home />} />
        <Route path="/concept" element={<Concept />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
