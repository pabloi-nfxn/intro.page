import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LeftLayout from './pages/LeftLayout'
import CardLayout from './pages/CardLayout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/left" replace />} />
        <Route path="/left" element={<LeftLayout />} />
        <Route path="/card" element={<CardLayout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
