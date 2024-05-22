import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App () {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Fin Experiment</h1>
      </header>
      <main className="app-main">

      </main>
      <footer className="app-footer">
      <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <p>Click on the Vite and React logos to learn more</p>
      </footer>
    </div>
  )
}

export default App
