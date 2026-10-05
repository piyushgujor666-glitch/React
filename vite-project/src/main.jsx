import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// function MyApp(){
//   return(
//     <div>
//       <h1>custome app !</h1>
//     </div>
//   )
// }
 
// const anotherUser = "Chai Aur React"

// const reactElement = React.createElement(
//   'a',
//   {href: 'https://google.com', target: '_blank'},
//   'Visit Google',
//   anotherUser
// )


// const anotherElement = (
//   <a href="https://google.com" target="_blank">Visit Google</a>
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <App />
   {/* reactElement */}
   {/* {anotherElement} */}
  </StrictMode>,
)
