import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {LoginPage , SignupPage , HomePage} from './pages/indexPages'
import './App.css'

function App() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signUp' element={<SignupPage />} />
        <Route path='/home' element={<HomePage />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
