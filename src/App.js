import React from 'react'
import Main from './pages/MainPage/MainPage'
import Home from './pages/HomePage/HomePage'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import LoginPage from './pages/LoginPage/LoginPage'
import SignupPage from './pages/SignupPage/SignupPage'


function App() {
  return (
	<div>
		<Navbar />
		<Routes>
        <Route path="/" element={<Home/>} />
		<Route path="/login" element={<LoginPage/>} />
		<Route path="/signup" element={<SignupPage/>} />
        </Routes>


	</div>
  )
}

export default App;