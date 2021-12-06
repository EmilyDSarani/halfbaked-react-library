import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import Home from './views/Home/Home'
import BookList from './views/Books/BookList'
import './App.css'

// WHY ARE YOU MAD
function App() {
  // Done
  return (
    <div className="App">
      <Router>
        <header>
          <NavLink exact className="App-link" to="/">
            Home
          </NavLink>
          <NavLink exact className="App-link" to="/booklist">
            Book List
          </NavLink>
        </header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/booklist" component={BookList} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
