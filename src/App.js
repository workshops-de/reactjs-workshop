import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import NameRaw from './components/NameRaw';
import Name from './components/Name';
import Counter from './components/Counter';
import BookList from './containers/BookList';
import BookDetails from './containers/BookDetails';
import BookEdit from './containers/BookEdit';
import BookNew from './containers/BookNew';

class App extends Component {
  render() {
    return (
      <div>
        <Name />
        <NameRaw />
        <nav>
          <Link to="/">Home</Link>
          |
          <Link to="/counter">Counter</Link>
          |
          <Link to="/books">Book List</Link>
          |
          <Link to="/books/new">Create new Book</Link>
        </nav>
        <Switch>
          <Route exact path="/counter" render={() => <Counter initialValue={10} />} />
          <Route exact path="/books" component={BookList} />
          <Route exact path="/books/new" component={BookNew} />
          <Route exact path="/books/:isbn" component={BookDetails} />
          <Route exact path="/books/:isbn/edit" component={BookEdit} />
        </Switch>
      </div>
    );
  }
}

export default App;
