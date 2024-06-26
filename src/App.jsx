import './App.css';
import { Home } from './sections';
import { ThemeProvider } from './components/ThemeContext';


function App() {

  return (
    <>
      <div className={`app bg-inherit`}>

        <ThemeProvider>
          <Home />
        </ThemeProvider>
        
      </div>
    </>
  )
}

export default App
