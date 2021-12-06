import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import Home from './views/Home/Home'
import BookList from './views/Books/BookList'
import './App.css'
import BookDetail from './views/Books/BookDetail'

function App() {
  // Done
  return (
    <div className="App">
      <Router>
        <header>
          <NavLink exact className="App-link" to="/">
            Home
          </NavLink>
          <NavLink exact className="App-link" to="/books">
            Book List
          </NavLink>
        </header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/books" exact component={BookList} />
          <Route path="/books/:id" component={BookDetail} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
