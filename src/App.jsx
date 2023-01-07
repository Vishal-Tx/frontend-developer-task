import React from 'react'
import {Auth, Home, Layout} from './Components'
import './App.css'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import {PostProvider} from './context'
import {Toaster} from 'react-hot-toast'

const App = () => {
  return (
    <PostProvider>
      <Toaster
        toastOptions={{
          duration: 2000,
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        }}
      />
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/posts" />} />

            <Route path="/posts">
              <Route index exact element={<Home />} />
            </Route>

            <Route path="/auth" exact element={<Auth />} />
          </Route>
        </Routes>
      </Router>
    </PostProvider>
  )
}

export default App
