 import Hero from './components/Hero';
import Demo from './components/Demo';
import './App.css';
import Login from '../pages/Login';
const App = () => {
  return (
   <main>
     <div className='main'>
        <div className='gradient' />
        </div>
        <div className='app'>
            <Hero />
            <Login />
        </div>
   </main>
  )
}

export default App; 
