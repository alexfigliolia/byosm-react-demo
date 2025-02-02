
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AppState, useAppState } from './AppState'
import { useCallback } from 'react';
import { Menu } from './Menu';

function App() {
  const open = useAppState(state => state.menuOpen);
  const onClick = useCallback(() => {
    AppState.update(state => {
      state.menuOpen = !state.menuOpen
    })
  }, [])

  return (
    <>
      <Menu />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={onClick}>
          Toggle Menu
        </button>
        <p>
          The menu is currently { open ? "open" : "closed"}
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
