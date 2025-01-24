import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from "./components/Login"

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App