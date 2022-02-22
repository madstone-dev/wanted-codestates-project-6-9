import React from "react"
import styled from "styled-components"
import { Route, Routes } from "react-router-dom"
import Index from "./pages"
import Detail from "./pages/details"

function App() {
  return (
    <AppComponent>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/details" element={<Detail />} />
      </Routes>
    </AppComponent>
  )
}

export default App

const AppComponent = styled.div`
  max-width: 500px;
  margin: auto;
`
