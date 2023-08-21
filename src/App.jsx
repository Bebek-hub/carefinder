import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import FindHospital from "./pages/FindHospital"
import NotFound from "./pages/NotFound"
import './App.css'

function App() {

  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="find-hospital" element={<FindHospital />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </main>
  )
}

export default App
