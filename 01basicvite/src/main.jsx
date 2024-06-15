import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const reactElement = {
  type: 'a',
  props: {
    href: 'http://linkedin.com/in/null-ptr',
    target: '_blank',
  },
  children: "Go to Rik's profile",
};

function MyApp(){
  return(
    // <div>
    //   <h2>custom react app</h2>
    // </div>
    reactElement
  )
}
/*it is basically literal HTML what is extracted*/
const AnotherElement = (
  <a href='http://google.com' target='_blank'>Visit Google</a>
)

/*it is object what react expect while rendering*/
const actualReactElement = React.createElement(
  'a',
  {href: 'http://google.com', target: '_blank'},
  'Click to Visit Google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <App/>
  // <MyApp/>
  // actualReactElement
)
