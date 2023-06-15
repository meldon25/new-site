import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Projects from './Components/Projects'

export default function App() {
  return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
        </Routes>
  )
}
