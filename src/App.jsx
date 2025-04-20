import './App.css'
import Header from './components/Header'
import PopupLayer from './components/PopupLayer'

function App() {
  return (
    <>
      <div>
        <PopupLayer />
        <Header />
        <div className='max-w-4xl w-full mx-auto flex gap-8 mt-58 sm:mt-40'>
          <h1>Text</h1>
        </div>
      </div>
      </>  )
}

export default App
