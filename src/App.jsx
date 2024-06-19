import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {LoginPage , SignupPage} from './pages/indexPages'
import './App.css'

function App() {
  

  return (
    <>
    <Router>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signUp' element={<SignupPage />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
