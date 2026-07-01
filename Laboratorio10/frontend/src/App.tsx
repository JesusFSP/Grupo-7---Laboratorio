import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { RestaurantHeader } from './components/RestaurantHeader'
import { HomePage } from './pages/HomePage'
import { ReservationPage } from './pages/ReservationPage'

function App() {
  return (
    <BrowserRouter>
      <RestaurantHeader />
      <main className="app-shell">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/reserva/:id" element={<ReservationPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App