// import { createElement } from 'react'
// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'

// jsx
const container = document.querySelector('#root');

if (!container) {
  throw new Error('No container found');
}



const app = (
  <div>
    <h1 className='greeting'>Hello world</h1>
    <button>Click me</button>
  </div>
)

const root = createRoot(container);

root.render(app)