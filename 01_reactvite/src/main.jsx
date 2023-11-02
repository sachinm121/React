import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <div>
            <h1>Custom App | sachin </h1>
        </div>
    )
}

function customRender(reactElement, container){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML  = reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
    container.appendChild(domElement)
}

const anotherElement = (
    <a href='http=google.com' target='_blank'>Visit google</a>
)

const anotherUser = "divesh"

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    'Click me to visit google ',
    anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
    // <MyApp />
    // customRender
    // anotherElement
    reactElement
    // <App />
)
