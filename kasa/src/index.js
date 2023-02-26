import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter} from 'react-router-dom'
import App from './App'
// import { createGlobalStyle } from 'styled-components'


// //mettre ca dans un autre dossier utils chap2-b!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const GlobalStyle = createGlobalStyle`
//     div {
      
    
//       box-sizing: border-box;
//       font-family: "Montserrat", sans-serif;
//     }
// `

ReactDOM.render(

    <BrowserRouter>
      {/* <GlobalStyle/> */}
        <App />
    </BrowserRouter> ,
  document.getElementById('root')
)