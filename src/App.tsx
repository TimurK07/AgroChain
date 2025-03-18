import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import UserInfo from './components/UserInfo'
import Catalog from './components/Catalog'
import Finances from './components/Finances'
import MyAssets from './components/MyAssets'
import { ProtectedRoute } from './components/ProtectedRoute'
import { PublicRoute } from './components/PublicRoute'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/catalog" element={
          <ProtectedRoute>
            <Catalog />
          </ProtectedRoute>
        } />
        <Route path="/my-assets" element={
          <ProtectedRoute>
            <MyAssets />
          </ProtectedRoute>
        } />
        <Route path="/finances" element={
          <ProtectedRoute>
            <Finances />
          </ProtectedRoute>
        } />
        <Route path="/login" element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        } />
        <Route path="/register" element={
          <PublicRoute>
            <Register />
          </PublicRoute>
        } />
        <Route path="/user-info" element={
          <ProtectedRoute>
            <UserInfo />
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  )
}

export default App