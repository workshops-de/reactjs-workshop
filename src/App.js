import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import NameRaw from './components/NameRaw';
import Name from './components/Name';
import Counter from './components/Counter';
import BookList from './containers/BookList';
import BookDetails from './containers/BookDetails';
import BookEdit from './containers/BookEdit';

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
        <Route exact path="/books/:isbn" component={BookDetails} />
        <Route exact path="/books/:isbn/edit" component={BookEdit} />
      </div>
    );
  }
}

export default App;
