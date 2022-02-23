import React from "react"
import styled from "styled-components"
import { Route, Routes } from "react-router-dom"
import Index from "./pages"
import Detail from "./pages/details"
import Register from "./pages/Register"

function App() {
  return (
    <AppComponent>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/details" element={<Detail />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </AppComponent>
  )
}

export default App

const AppComponent = styled.div`
  max-width: 500px;
  margin: auto;
`
