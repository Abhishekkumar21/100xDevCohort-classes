import { Suspense, lazy } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { AppBar } from './Components/AppBar'
const Dashboard = lazy(() => import('./Components/Dashboard'))
const Landing = lazy(() => import('./Components/Landing'))

export default function App() {

  return (
    <div>
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route path='/dashboard' element={<Suspense fallback={'Loadind...'}><Dashboard /></Suspense>} />
          <Route path='/' element={<Suspense fallback={'Loadind...'}><Landing /></Suspense>} />
        </Routes>
      </BrowserRouter>
    </div >
  )
}

//moved AppBar() component in a seperate component file : AppBar.jsx

// function AppBar() {
//   const navigate = useNavigate();

//   return (
//     <div style={{ background: 'skyBlue', borderBottom: '2px solid black', padding: '10px' }}>
//       <button onClick={() => navigate('/dashboard')} >Dashboard</button>
//       <button onClick={() => navigate('/')} >Landing Page</button>
//     </div>
//   )
// }


