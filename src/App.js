import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import NameRaw from './components/NameRaw';
import Name from './components/Name';
import Counter from './components/Counter';
import BookList from './containers/BookList';
import BookDetail from './components/BookDetail';

class App extends Component {
  render() {
    return (
      <div>
        <Name />
        <NameRaw />
        <nav>
          <Link to="/counter">Counter</Link>
          |
          <Link to="/book-list">Book List</Link>
        </nav>
        <Route exact path="/counter" render={() => <Counter initialValue={10} />} />
        <Route exact path="/book-list" component={BookList} />
        <Route path="/books/:id" component={BookDetail} />
      </div>
    );
  }
}

export default App;
