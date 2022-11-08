import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { Home } from './views/Home'
import { Login } from './views/Login'
import './assets/styles/style.scss'

import { EmailApp } from './views/email/EmailApp'
import { AppHeader } from './cmps/AppHeader'
import { EmailDetails } from './views/email/EmailDetails'
import { EmailCompose } from './views/email/EmailCompose'

export function App() {
  return (
    <Router>
      <div className='App container'>
        <AppHeader />
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='email' element={<EmailApp />}>
            <Route path='compose' element={<EmailCompose />} />
          </Route>
          <Route path='email/:emailId' element={<EmailDetails />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
