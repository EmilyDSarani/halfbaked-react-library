import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import Home from './views/Home/Home'
import BookDetail from './views/Books/BookDetail'
import './App.css'

// WHY ARE YOU MAD
function App() {
  // TODO: Add routes to books & views
  return (
    <div className="App">
      <Router>
        <header>
          <NavLink exact className="App-link" to="/">
            Home
          </NavLink>
          <NavLink exact className="App-link" to="/bookdetail">
            Book Details
          </NavLink>
        </header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/bookdetail" component={BookDetail} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
