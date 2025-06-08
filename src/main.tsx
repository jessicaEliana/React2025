// import { createElement } from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import NavBar from './componentes/NavBar.tsx'
import Ejercicio2 from './Ejercicio2.tsx';

// jsx
// const container = document.querySelector('#root');

// if (!container) {
//   throw new Error('No container found');
// }



// const app = (
//   <div>
//     <h1 className='greeting'>Hello world</h1>
//     <button>Click me</button>
//   </div>
// )

// const root = createRoot(container);

// root.render(app)

// const container = document.querySelector('#root');
// const button = createElement('button', {}, 'Click me');
// const element = createElement(
//   'h1', // type
//   { className: 'greeting' }, //props
//   'Hello world!' // children
// );

// const App = createElement('div', {}, [element, button]);

// // const root =createRoot(container!);
// if (!container) {
//   throw new Error('No container found');
// }
// const root = createRoot(container);

// root.render(App);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NavBar/>
    <Ejercicio2/>
    <App />
  </StrictMode>,
)
