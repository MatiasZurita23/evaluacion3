import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoList } from './todolist'
import { Header } from './Header'
import { Footer } from './Footer'

export function App() {
  const [count, setCount] = useState(0)

  return (  
    <div className="d-flex flex-column min-vh-100">
      <Header/>
      <main className="container my-4 p-4 bg-light rounded shadow-sm flex-grow-1">
        <h1 className="text-center mb-4 text-primary">Gestiona tus Tareas Pendientes</h1>
        <TodoList/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
